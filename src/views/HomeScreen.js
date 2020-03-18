import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import WorkspaceList from '../components/WorkspaceList';
import RoomList from '../components/RoomList';
import Chat from '../components/Chat';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Sidebar from '../components/Sidebar';
import { io, ioNS } from '../utils/io';
import * as namespacesActions from '../redux/namespaces/namespacesActions'

const HomeScreen = props => {
   const classes = useStyles();
   const dispatch = useDispatch();

   useEffect(() => {
      // import namespaces from socket
      io.on('nsList', nsList => {
         dispatch(namespacesActions.fetchNamespacesSuccess(nsList));
         // nsList.forEach(item => {
         //    const ns = ioNS(item.endpoint);
         //    ns.on('nsRoomLoad', roomList => {
         //       console.log(roomList);
         //       console.log(nsList)
         //    });
         // });
      });
   }, []);

   return (
      <div className={classes.container}>
         <Sidebar />
         <Chat />
      </div>
   );
};

const useStyles = makeStyles({
   container: {
      display: 'flex',
      height: '100vh'
   }
});

export default withRouter(HomeScreen);
