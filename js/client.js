const io = require('socket.io');
const socket = io('http://localhost:8000');

const form = document.getElementById('send-container');
const messageInput = document.getElementById('messageInp');
const messageContainer = document.querySelector('.container');

const name = prompt('Enter Your Name to Join');
socket.emit('New-User-Join', name);