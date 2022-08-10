import { io } from "socket.io-client";

export function initiateSocket(url=process.env.REACT_APP_EVENT_SERVICE, options={}) {
  const socket = io(url?.trim(), {
    transports: ["websocket"],
    reeconnection: true,
    reconnectionDelay: 3000,
    reconnectionDelayMax: 5000,
    secure: true,
    disconnectedOnUnload: true,
    reconnectionAttempts: 10,
    "sync disconnect on unload": true,
    ...options
  })

  socket.on("connect", (data) => {
    console.log("I'm connected", data);
  });

  socket.on("message", (data) => {
    console.log("on message", data);
  });
  socket.on('connect_error', function() {
    console.log("error. deleting socket");
  });
  socket.on('reconnect_error', function() {
      console.log("reconnect_error");
  });
  socket.on('connect_timeout', function() {
      console.log("connect_timeout");
  });
  socket.on('error', function() {
    console.log("error. deleting socket");
  });
  socket.on('reconnect_failed', function() {
      console.log("reconnect_failed");
  });
  socket.on('reconnect', function() {
      console.log("reconnect");
  });
  socket.on('reconnecting', function() {
    console.log("reconnecting");
  });

  return socket
}