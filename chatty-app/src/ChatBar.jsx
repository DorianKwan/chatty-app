import React, {Component} from 'react';

class ChatBar extends Component {

  render() {
    console.log(this.props);
    return (
      <footer className="chatbar">
        <input className="chatbar-username" placeholder="Your Name (optional)" onKeyDown={(event) => {
          if (event.key === 'Enter') {
          this.props.setUser(event.target.value);
          }
        }}/>
        <input className="chatbar-message" placeholder="Type a message and hit ENTER" onKeyDown={(event) => {
          if (event.key === 'Enter') {
          this.props.sendMessage(event.target.value);
          event.target.value = '';
          }
        }} />
      </footer>
    );
  }
}

export default ChatBar;
