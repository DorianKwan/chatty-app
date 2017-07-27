import React, {Component} from 'react';
import NavBar from './NavBar.jsx';
import MessageList from './MessageList.jsx';
import ChatBar from './ChatBar.jsx';
import uuidv4 from 'uuid/v4';

const wsServer = new WebSocket('ws://0.0.0.0:3001/')

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      currentUser: { name: 'Anonymous' }, 
      messages: [{ type: 'post', id: 1, username: 'ChattyBot', content: 'Welcome to Chatty App!' }]
    }
  }

  addMessage(content) {
    if(content === '') {
      return
    }
    const newMessage = {
      type: 'post',
      id: uuidv4(),
      username: this.state.currentUser.name,
      content
    }
    wsServer.send(JSON.stringify(newMessage));
  }

  setUser(newUser) {
    if(newUser === '') {
      return
    }
    const newUsername = {
      type: 'notification',
      id: uuidv4(),
      username: this.state.currentUser.name,
      content: newUser
    }
    wsServer.send(JSON.stringify(newUsername));
    this.setState({ currentUser: { name: newUser } });
  }

  componentDidMount() {
    wsServer.onopen = (event) => {
      console.log('Websocket Connection Made!');
    }

    setTimeout(() => {
      const messages = this.state.messages;
      const usercount = this.state.usercount;
      this.setState({ 
        messages, 
        usercount 
      })
    }, 500);

    wsServer.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.content) {
        const newPost = data
        const newList = this.state.messages.concat(newPost);
        this.setState({
          messages: newList,
        });
      } else {
        const newUser = data;
        this.setState({
          usercount: newUser
        });
      }
    }
  }

  render() {
    return (
      <div id="react-root">
        <NavBar usercount={ this.state.usercount }/>
        <MessageList messages={ this.state.messages }/>
        <ChatBar sendMessage={ this.addMessage.bind(this) } setUser={ this.setUser.bind(this) } />
      </div>
    );
  }
}
export default App;
