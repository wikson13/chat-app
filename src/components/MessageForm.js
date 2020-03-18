import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {makeStyles} from "@material-ui/core/styles";
import {theme} from "../config/theme";

const MessageForm = () => {
    const classes = useStyles();
    const [inputValue, setInputValue] = useState('');
    const sendMessage = () => {
        console.log(`Message: ${inputValue}`)
        setInputValue('')
    };
    return (
        <div className={classes.container}>
            <TextField
                multiline
                placeholder='Message...'
                variant="outlined"
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
                className={classes.input}
            />
            <Button
                variant="contained"
                size="large"
                color="primary"
                className={classes.button}
                onClick={sendMessage}>
                Send
            </Button>
        </div>
    );
};

const useStyles = makeStyles({
    container: {
        marginTop: '10px'
    },
    input: {
        width: 'calc(100% - 105px)'
    },
    button: {
        height: 55,
        marginLeft: 5,
        width: '100px',
        backgroundColor: '#0c2461'
    },
    room: {
        fontWeight: '300',
        marginBottom: '5px',
        '&:hover': {
            cursor: 'pointer',
        },
    }

});

export default MessageForm;
