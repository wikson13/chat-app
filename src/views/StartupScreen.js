import React, { useEffect } from 'react';
import Loading from '../components/Loading';
import { useDispatch, useSelector } from 'react-redux';
import * as authActions from '../redux/auth/authActions';
import HomeScreen from './HomeScreen';
import Login from './Login';

const StartupScreen = () => {
   const dispatch = useDispatch();
   const userId = useSelector(state => state.auth.userId);
   const isLoading = useSelector(state => state.auth.loading);

   useEffect(() => {
      dispatch(authActions.authStorageRequest());
   }, []);

   // return <>{isLoading ? <Loading/> : (
   //     userId ? <HomeScreen/> : <Login/>
   // )}</>;
   return <HomeScreen />;
};

export default StartupScreen;
