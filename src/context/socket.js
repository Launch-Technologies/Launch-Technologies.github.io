import React from 'react';
import socketio from 'socket.io-client';

export const socket = socketio.connect(
  process.env.REACT_APP_EVENT_SERVICE.trim(),
  {
    reeconnection: true,
    reconnectionAttempts: 10,
  }
);
export const SocketContext = React.createContext();
