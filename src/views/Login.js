import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

import {makeStyles} from '@material-ui/core/styles';
import {useDispatch, useSelector} from "react-redux";
import * as authActions from "../redux/auth/authActions";

const Login = () => {
    const classes = useStyles();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [isLogin, setIsLogin] = useState(true);
    const dispatch = useDispatch();
    const error=useSelector(state=>state.auth.err);
    const signinButtonHandler = () => {
        dispatch(authActions.authRequest({email, password, isLogin}));
    };
    return (
        <div className={classes.container}>
            <Paper elevation={11} className={classes.loginBox}>
                <h1>DressLove Panel</h1>
                <TextField label="E-mail" variant="outlined" className={classes.input} fullWidth value={email}
                           onChange={(e) => setEmail(e.target.value)} error={error===null?false:true}/>
                <TextField label="Hasło" variant="outlined" className={classes.input} helperText={error===null?'':error.message} error={error===null?false:true}
                                 fullWidth value={password} onChange={(e) => setPassword(e.target.value)} type={showPassword ? 'text' : 'password'} InputProps={{
                    endAdornment:<InputAdornment position="end">
                        <IconButton
                            onClick={()=>setShowPassword(!showPassword)}
                            // onMouseDown={handleMouseDownPassword}
                        >
                            {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                    </InputAdornment>
                }}/>
                <Button variant="contained" color="primary" className={classes.button} onClick={signinButtonHandler}>
                    {isLogin?'Zaloguj':'Zarejestruj'}
                        </Button>
                <p onClick={()=>setIsLogin(!isLogin)}>{isLogin?'Rejestracja':'Logowanie'}</p>
            </Paper>
        </div>
    );
};

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#eee'
    },
    loginBox: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '10px 60px 20px 60px',
    },
    input: {
        marginTop: '15px'
    },
    button: {
        marginTop: '10px'
    }
}));

export default Login;
