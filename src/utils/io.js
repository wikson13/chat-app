import socketIOClient from 'socket.io-client';
import { port } from '../constants';

export const io = socketIOClient(`http://localhost:${port}`);
export const ioNS = namespace => {
   return socketIOClient(`http://localhost:${port}${namespace}`);
};
