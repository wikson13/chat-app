import React from 'react';

import {makeStyles} from "@material-ui/core/styles";

const WorkspaceItem = ({title,imgSrc,onClick}) => {
    const classes = useStyles();

    return (
        <div className={classes.container} onClick={onClick}>
                <img src={imgSrc} alt="icon" className={classes.img}/>
                <p style={{color:'#fff'}}>{title}</p>
        </div>
    );
};

const useStyles = makeStyles({
    container:{
        margin:'15px 0',
        textAlign:'center',
        '&:hover': {
            cursor: 'pointer',
        },
    },
   img:{
       height:'40px',
       width:'40px'
   },


});

export default WorkspaceItem;
