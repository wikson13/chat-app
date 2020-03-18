import React from 'react';
import {makeStyles} from "@material-ui/core/styles";

const Message = ({username, avatar, time,message}) => {
    const classes = useStyles();

    return (
        <div className={classes.message}>
            <div className={classes.header}>
                <img className={classes.avatar} src={avatar}/>
                <div className={classes.username}>{username}</div>
                <div className={classes.time}>{time}</div>
            </div>
            <div className={classes.content}>{message}</div>
        </div>
    );
};


const useStyles = makeStyles({
    message: {
        margin: '5px',
        padding: '5px',
        borderRadius: '5px',
        backgroundColor: '#fff',
        width: 'auto',
        // boxShadow: ' 0px 3px 3px -2px rgba(0,0,0,0.2), 0px 3px 4px 0px rgba(0,0,0,0.14), 0px 1px 8px 0px rgba(0,0,0,0.12)'
    },
    header: {
        display: 'flex',
        alignItems: 'center'
    },
    avatar: {
        height: '30px'
    },
    username: {
        margin:'5px',
        fontWeight:'600',
        color:'#393939'
    },
    time: {
        fontSize:'12px',
        fontWeight:'500',

        color:'#a0a0a0'
    },
    content:{
        marginLeft:'35px',
        marginTop:'5px'
    }

});


export default Message;
