import React, {useEffect} from 'react';
import {
    Switch,
    Route,
} from "react-router-dom";
import {withRouter} from "react-router-dom";

import * as dataActions from '../redux/data/dataActions';
import {useDispatch} from "react-redux";
import WorkspaceList from "../components/WorkspaceList";
import RoomList from "../components/RoomList";
import Chat from "../components/Chat";
import Grid from '@material-ui/core/Grid';
import {makeStyles} from '@material-ui/core/styles';
import Sidebar from "../components/Sidebar";

const HomeScreen = (props) => {
    const classes = useStyles();

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(dataActions.fetcbDataRequest())
    }, []);
    return (
        <div className={classes.container}>
                <Sidebar/>
                <Chat/>
        </div>
    );
};

const useStyles = makeStyles({
    container: {
        display: 'flex',
        height:'100vh'
    }

});

export default withRouter(HomeScreen);
