import React ,{useEffect}from 'react';
import {
    Switch,
    Route,
} from "react-router-dom";
import {withRouter} from "react-router-dom";

import * as dataActions from '../redux/data/dataActions';
import {useDispatch} from "react-redux";
const HomeScreen = (props) => {
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(dataActions.fetcbDataRequest())
    },[]);
    return (
        <div>
          ss
        </div>
    );
};

export default withRouter(HomeScreen);
