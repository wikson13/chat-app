import React from 'react';

import {makeStyles} from "@material-ui/core/styles";

const WorkspaceItem = ({title,imgSrc}) => {
    const classes = useStyles();

    return (
        <div className={classes.container}>
                <img src={imgSrc} alt="icon" className={classes.img}/>
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
