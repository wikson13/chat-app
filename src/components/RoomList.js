import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {theme} from "../config/theme";

const RoomList = () => {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <div className={classes.title}>Rooms</div>
            <div className={classes.room}>#Group1</div>
            <div className={classes.room}>#Group2</div>
        </div>
    );
};

const useStyles = makeStyles({
    container: {
        padding: theme.spacing,
        borderRight: '1px solid #eee',
        backgroundColor: '#0c2461',
        color: '#fff',
    },
    title: {
        fontWeight: '700',
        marginBottom:'8px'
    },
    room: {
        fontWeight: '300',
        marginBottom: '5px'
    }

});

export default RoomList;
