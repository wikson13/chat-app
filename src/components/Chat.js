import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {theme} from "../config/theme";
import MessageForm from "./MessageForm";
import MessagesWrapper from "./MessagesWrapper";

const Chat = () => {
    const classes = useStyles();

    return (
        <div className={classes.container}>
           <MessagesWrapper/>
            <MessageForm/>
        </div>
    );
};

const useStyles = makeStyles({
    container:{
        display:'flex',
        flexDirection:'column',
        flexGrow:1,
        padding:theme.spacing,
        justifyContent:'space-between',
    },
    chat:{
backgroundColor: 'lightgray',
        flexDirection: 'column',
        flexGrow: 1
    }

});

export default Chat;
