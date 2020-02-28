'use strict';

const io = require('socket.io-client');
const sio = io.connect('http://localhost:3000');

sio.on('err', payload => {
  console.log('heard error', payload);
});

sio.on('success', payload => {
  console.log(' success', payload);
});