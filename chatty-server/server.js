const express       = require('express');
const SocketServer  = require('ws').Server;

const PORT          = 3001;

const server = express()
  .use(express.static('public'))
  .listen(PORT, '0.0.0.0', 'localhost', () => console.log(`Listening on ${ PORT }`));

const wss = new SocketServer({ server });

// For each connected client, send back the data

function broadcast(data) {
  for(let client of wss.clients) {
    client.send(data);
  }
}

// Handles incoming messages from the client

function handleMessage(data) {
  const dataObj = JSON.parse(data);
  let message = '';
  // Logic for directing a proper response
  switch (dataObj.type) {
  case 'notification':
    if(dataObj.content === dataObj.username) {
      dataObj.content = `${dataObj.username} You cannot change your name to the same name.`;
      dataObj.username = 'ChattyBot';
      message = JSON.stringify(dataObj);
      break;
    } else {
      dataObj.content = `${dataObj.username} has changed their name to ${dataObj.content}`;
      dataObj.username = 'System Notification';
      message = JSON.stringify(dataObj);
      break;
    }
  case 'post':
    message = JSON.stringify(dataObj);
    break;
  default:
    message = JSON.stringify(dataObj);
    break;
  }
  broadcast(message);
}

// Handles connection and disconnection to server

function handleConnection(client) {
  userCount = wss.clients.size;
  client.send(userCount);
  broadcast(userCount);
  // When server recieves a message, execute the callback
  client.on('message', handleMessage);
  // When client disconnects from the server, execute the callback
  client.on('close', () => {
    broadcast(userCount);
    console.log('Client disconnected');
  });
}

wss.on('connection', handleConnection);