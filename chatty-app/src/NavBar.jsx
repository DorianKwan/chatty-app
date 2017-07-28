import React, {Component} from 'react';

class NavBar extends Component {

  render() {
    return (
      <nav className="navbar">
        <a href="/" className="navbar-brand">Chatty</a>
        <span className="users-count">{ this.props.usercount } Users Online</span>
      </nav>
    );
  }
}

export default NavBar;
