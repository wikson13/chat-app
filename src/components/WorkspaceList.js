import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {theme} from "../config/theme";
import IconButton from '@material-ui/core/IconButton';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import WorkspaceItem from "./WorkspaceItem";
import {useDispatch, useSelector} from "react-redux";
import * as namespaceActions from '../redux/namespaces/namespacesActions';
import * as roomsActions from '../redux/rooms/roomsActions';
import {ioNS} from "../utils/io";
import {
    withRouter
} from 'react-router-dom'
const WorkspaceList = props => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const namespaceList = useSelector(state => state.namespace.nsList);

    const activateRoom = (endpoint) => {
        dispatch(namespaceActions.setActiveNamespace({endpoint}));
        const ns = ioNS(endpoint);
        ns.on('nsRoomLoad', roomList => {
            dispatch(roomsActions.fetchRoomsSuccess(roomList));
        })
        props.history.push(endpoint)
    };

    const generateNamespaces = () => {
        return namespaceList.map(namespace => {
            return <WorkspaceItem
                key={namespace.id}
                title={namespace.title}
                id={namespace.id}
                imgSrc={namespace.img}
                onClick={() => activateRoom(namespace.endpoint)}/>
        })
    };

    const addNamespace = () => {
        console.log('Add namespace')
    };

    return (
        <div className={classes.container}>
            <div>
                {/*<WorkspaceItem title='School' id="01"*/}
                {/*               imgSrc="https://i.ya-webdesign.com/images/white-graduation-cap-png-7.png"/>*/}
                {/*<WorkspaceItem title='Work' id="02"*/}
                {/*               imgSrc="https://www.materialui.co/materialIcons/action/work_white_192x192.png"/>*/}
                {generateNamespaces()}
            </div>
            <IconButton onClick={addNamespace}>
                <AddCircleIcon className={classes.addIcon}/>
            </IconButton>

        </div>

    );
};

const useStyles = makeStyles({
    container: {
        display: 'flex',
        flexDirection: 'column',
        padding: theme.spacing,
        backgroundColor: '#0C1B36',
        // justifyContent:'space-between',
    },
    addIcon: {
        color: '#fff',
    }

});

export default withRouter(WorkspaceList);
