'use strict';

const io = require('socket.io')(3000);

io.on('connect', (socket) => {
  console.log('Connected', socket.id);

  socket.on('error', (payload) => {
    console.log('error', payload);
    socket.broadcast.emit('err', payload);
  });

  socket.on('disconnect', () => {
    console.log('Disconnected', socket.id);
  });

});