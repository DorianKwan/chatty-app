import React, {Component} from 'react';
import NavBar from './NavBar.jsx';
import MessageList from './MessageList.jsx';
import ChatBar from './ChatBar.jsx';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      currentUser: {name: 'Bob'}, 
      messages: [
        {
          username: 'Bob',
          content: 'Has anyone seen my marbles?',
        },
        {
          username: 'Anonymous',
          content: 'No, I think you lost them. You lost your marbles Bob. You lost them for good.'
        }
      ]
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ 
      currentUser: {name: 'Bob'}, 
        messages: [
          {
            username: 'Bob',
            content: 'Has anyone seen my marbles?',
          },
          {
            username: 'Anonymous',
            content: 'No, I think you lost them. You lost your marbles Bob. You lost them for good.'
          }
        ]
      })
    }, 500)
  }

  render() {
    return (
      <div id="react-root">
        <NavBar />
        <MessageList />
        <ChatBar currentUser={ this.state.currentUser } />
      </div>
    );
  }
}
export default App;
