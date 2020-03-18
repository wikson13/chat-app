import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Message from "./Message";

const MessagesWrapper = () => {
    const classes = useStyles();

    return (
        <div className={classes.chat}>
            <Message
                username='Radosław'
                avatar='https://cdn.filestackcontent.com/TQVYCexnTfmCRWGwfVOQ'
                time='17:33'
                message='Halo halo! Co tu się dzieje?'
            />
            <Message
                username='Wikson'
                avatar='https://icons.iconarchive.com/icons/blackvariant/button-ui-requests-2/512/Minecraft-2-icon.png'
                time='17:35'
                message='Tak to ma mniej więcej wyglądać?'
            />
            <Message
                username='Jacek Czwartkowski'
                avatar='https://i0.wp.com/bsnl.ch/wp-content/uploads/2019/03/avatar-default-circle.png?fit=260%2C260&ssl=1'
                time='17:41'
                message='Panowie, ten projekt to kompletny gniot. Proszę przygotować indeksy - 2.0 dla każdego. Za rok oczekuję projektu z arduino!!!'
            />
        </div>
    );
};


const useStyles = makeStyles({

    chat: {
        flexDirection: 'column',
        flexGrow: 1
    },


});

export default MessagesWrapper;
