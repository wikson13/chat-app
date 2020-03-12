import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {theme} from "../config/theme";
import IconButton from '@material-ui/core/IconButton';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import WorkspaceItem from "./WorkspaceItem";
const WorkspaceList = () => {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <div>
                <WorkspaceItem title='School' id="01" imgSrc="https://i.ya-webdesign.com/images/white-graduation-cap-png-7.png"/>
                <WorkspaceItem title='Work' id="02" imgSrc="https://www.materialui.co/materialIcons/action/work_white_192x192.png"/>
            </div>
            <IconButton >
                <AddCircleIcon className={classes.addIcon}/>
            </IconButton>

        </div>

    );
};

const useStyles = makeStyles({
    container:{
        display:'flex',
        flexDirection:'column',
        padding:theme.spacing,
        backgroundColor:'#0C1B36',
        // justifyContent:'space-between',
    },
    addIcon:{
        color:'#fff',
    }

});

export default WorkspaceList;
