import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Message from './Message.jsx';

ReactDOM.render(<Message />, document.getElementById('react-message'));

class MessageList extends Component {
  render() {
    return (
      <main className="messages">
        <div id="react-message"></div>
      </main>
    );
  }
}
export default MessageList;
