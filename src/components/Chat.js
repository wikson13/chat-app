import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {theme} from "../config/theme";

const Chat = () => {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <div>Chat</div>
            <div>input</div>
        </div>
    );
};

const useStyles = makeStyles({
    container:{
        flexDirection:'column',
        flexGrow:1,
        padding:theme.spacing

    }

});

export default Chat;
