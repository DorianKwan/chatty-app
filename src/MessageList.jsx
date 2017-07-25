import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Message from './Message.jsx';

class MessageList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const messages = this.props.messages.map(message => {
      return <Message
        key= { message.id }
        username={ message.username }
        message={ message.content } />
    });
    
    return (
      <main className="messages">
        { messages }
      </main>
    );
  }
}

MessageList.propTypes = {
    messages: PropTypes.array.isRequired
  }
export default MessageList;

