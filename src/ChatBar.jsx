import React, {Component} from 'react';

class ChatBar extends Component {
  render() {
    return (
      <div>
        <input className="chatbar-usersome" placeholder="Your Name (optional)" />
        <input className="chatbar-message" placeholder="Type a message and hit ENTER" />
      </div>
    );
  }
}
export default ChatBar;