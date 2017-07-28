import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Message extends Component {
  render() {
    return (
      <div className="message">
        <span className="message-username">{ this.props.username }</span>
        <span className="message-content">{ this.props.message }</span>
      </div>
    );
  }
}

export default Message;
