// Application entrypoint.

// Load up the application styles
require("../styles/application.scss");

// Render the top-level React component
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import MessageList from './MessageList.jsx';
import Message from './Message.jsx';
import ChatBar from './ChatBar.jsx';

ReactDOM.render(<App />, document.getElementById('react-root'));
ReactDOM.render(<MessageList />, document.getElementById('react-list'));
ReactDOM.render(<Message />, document.getElementById('react-message'));
ReactDOM.render(<ChatBar />, document.getElementById('react-footer'));
