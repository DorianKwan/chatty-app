import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Message from './Message.jsx';

class MessageList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // Iterate through each message in messages and gives message.jsx access to the values
    const messages = this.props.messages.map(message => {
      return <Message
        key = { message.id }
        username ={ message.username }
        message ={ message.content } 
        color = { message.textcolor } />
    });
    
    return (
      <main className="messages">
        { messages }
      </main>
    );
  }
}

MessageList.propTypes = {
    messages: PropTypes.array.isRequired,
    user: PropTypes.object.isRequired
}
export default MessageList;

