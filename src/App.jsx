import React, {Component} from 'react';
import NavBar from './NavBar.jsx';
import MessageList from './MessageList.jsx';
import ChatBar from './ChatBar.jsx';
import uuidv4 from 'uuid/v4';

function uniqueId() {
  return Math.random().toString(36).substr(2, 6);
}

const wsServer = new WebSocket('ws://0.0.0.0:3001/')

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      currentUser: { name: 'Bob' }, 
      messages: []
    }
  }

  addMessage(content) {
    console.log(content);
    const newMessage = {
      id: uuidv4(),
      username: this.state.currentUser.name,
      content
    };
      console.log('sending up data: ' + JSON.stringify(newMessage));
      wsServer.send(JSON.stringify(newMessage));

    const newList = this.state.messages.concat(newMessage);
    this.setState({
      messages: newList
    });
  }

  componentDidMount() {

    wsServer.onopen = () => {
      console.log('Websocket Connection Made!');
    }

    setTimeout(() => {
      const newMessage = {id: 3, username: 'Michelle', content: 'Hello there!'};
      const messages = this.state.messages.concat(newMessage)
      this.setState({ messages })
    }, 500);
  }

  render() {
    return (
      <div id="react-root">
        <NavBar />
        <MessageList messages={ this.state.messages }/>
        <ChatBar sendMessage={ this.addMessage.bind(this) } currentUser={ this.state.currentUser } />
      </div>
    );
  }
}
export default App;
