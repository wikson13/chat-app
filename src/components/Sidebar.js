import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import WorkspaceList from "./WorkspaceList";
import RoomList from "./RoomList";

const Sidebar = () => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
                <WorkspaceList/>
                <RoomList/>
        </div>
    );
};

const useStyles = makeStyles({
    container: {
        display:'flex',
        height:'100vh'
    }

});

export default Sidebar;
