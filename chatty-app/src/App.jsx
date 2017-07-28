import React, {Component} from 'react';
import NavBar from './NavBar.jsx';
import MessageList from './MessageList.jsx';
import ChatBar from './ChatBar.jsx';
import uuidv4 from 'uuid/v4';

const wsServer = new WebSocket('ws://0.0.0.0:3001/');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      currentUser: { name: 'Anonymous', textcolor: { color: 'grey' } }, 
      messages: [{ type: 'post', id: 1, username: 'ChattyBot', content: 'Welcome to Chatty App!', textcolor: { color: 'black' }}]
    }
  }

  // Sends new message from client to the server

  sendMessage(content) {

    // Logic for filtering empty messages
    if(content === '') {
      return;
    }
    const newMessage = {
      type: 'post',
      id: uuidv4(),
      username: this.state.currentUser.name,
      content,
      textcolor: this.state.currentUser.textcolor
    }
    wsServer.send(JSON.stringify(newMessage));
  }

  // Sets the state of current user to a new user

  setUser(newUser) {

    function randomColor() {
      const colors = ['#cc0000', '#58D68D', '#429bf4', '#a641f4', '#f4c242', '#e842f4', '#0206fc', '#02fc2c', 'pink', 'orange'];
      const index = (Math.floor(Math.random() * 10));
      return colors[index];
    }

    // Logic to filter empty name change requests
    if(newUser === '') {
      return;
    }

    const newUsername = {
      type: 'notification',
      id: uuidv4(),
      username: this.state.currentUser.name,
      content: newUser
    }
    wsServer.send(JSON.stringify(newUsername));
    this.setState({ currentUser: { name: newUser, textcolor: { color: randomColor() } } });
  }

  // Once the dom node has loaded run this bit of code

  componentDidMount() {

    // Event handler for incoming messages from the server

    wsServer.onmessage = (event) => {
      const data = JSON.parse(event.data);

      // Logic to check if the incoming message has content

      if (data.content) {
        const newPost = data;
        const newList = this.state.messages.concat(newPost);
        this.setState({
          messages: newList
        });
      } else {
        const usercount = data;
        this.setState({
          usercount
        });
      }
    }
  }

  render() {
    return (
      <div id="react-root">
        <NavBar usercount={ this.state.usercount }/>
        <MessageList messages={ this.state.messages } user={ this.state.currentUser } />
        <ChatBar sendMessage={ this.sendMessage.bind(this) } setUser={ this.setUser.bind(this) } />
      </div>
    );
  }
}
export default App;
