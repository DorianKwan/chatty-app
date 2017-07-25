import React, {Component} from 'react';
import NavBar from './NavBar.jsx';
import MessageList from './MessageList.jsx';
import ChatBar from './ChatBar.jsx';

function uniqueId() {
  return Math.random().toString(36).substr(2, 6);
}

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      currentUser: { name: 'Bob' }, 
      messages: [
        {
          id: uniqueId(),
          username: 'Bob',
          content: 'Has anyone seen my marbles?',
        },
        {
          id: uniqueId(),
          username: 'Anonymous',
          content: 'No, I think you lost them. You lost your marbles Bob. You lost them for good.'
        }
      ]
    }
  }

  addMessage(content) {
    const newMessage = {
      id: uniqueId(),
      username: 'Anonymous',
      content
    };
    const newList = this.state.messages.concat(newMessage);
    this.setState({
      messages: newList
    });
  }

  componentDidMount() {
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
