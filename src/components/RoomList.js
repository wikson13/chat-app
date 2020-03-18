import React, {useEffect} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {theme} from "../config/theme";
import {useSelector} from "react-redux";
import {withRouter} from 'react-router-dom'

const RoomList = props => {
    const classes = useStyles();
    const roomList = useSelector(state => state.room.roomList);
    const activeNS = useSelector(state => state.namespace.activeNS);
    const generateRooms = () => {
        return roomList.map(room => {
            return <div key={room.roomId} className={classes.room}
                        onClick={()=>props.history.push(`${activeNS.endpoint}/${room.roomId}`)}>#{room.roomTitle}</div>
        })
    };

    return (
        <div className={classes.container}>
            <div className={classes.title}>Rooms</div>
            {generateRooms()}
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
        marginBottom: '8px'
    },
    room: {
        fontWeight: '300',
        marginBottom: '5px',
        '&:hover': {
            cursor: 'pointer',
        },
    }

});

export default withRouter(RoomList);
