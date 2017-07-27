const express       = require('express');
const SocketServer  = require('ws').Server;

const PORT          = 3001;

const server = express()
  .use(express.static('public'))
  .listen(PORT, '0.0.0.0', 'localhost', () => console.log(`Listening on ${ PORT }`));

const wss = new SocketServer({ server });

function broadcast(data) {
  for(let client of wss.clients) {
    client.send(data);
  }
}

function handleMessage(data) {
  const dataObj = JSON.parse(data);
  let message = '';
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
  }
  broadcast(message);
}

function handleConnection(client) {
  console.log('Client conneced');
  userCount = wss.clients.size;
  client.send(userCount);
  broadcast(userCount);
  client.on('message', handleMessage);
  client.on('close', () => {
    broadcast(userCount);
    console.log('Client disconnected');
  });
}

wss.on('connection', handleConnection);