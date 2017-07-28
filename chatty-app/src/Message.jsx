import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Message extends Component {

  render() {
    return (
      <div className="message">
        <span style={ this.props.color } className="message-username">{ this.props.username }</span>
        <span className="message-content">{ this.props.message }</span>
      </div>
    );
  }
}

Message.propTypes = {
    username: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    color: PropTypes.object.isRequired
}
export default Message;
