Chatty
=====================

Welcome to ChattyApp 
  - A group messaging system based off of features offered in Slack. Chatty was build using JavaScript, ReactJS and  a websocket server to update users in real-time.
  - Users of Chatty will be able to send messages to a message board where they will be broadcasted to the rest of the current active users
  - Users are named anonymous unless they decide to change their username for their current session. Picking a username will change the color of their name within the message board. Colors and usernames are only active during their session and reset once refreshed or exited.
  
  
### As seen below

![Alt text](/chatty-app/screenshots/chatty.png?raw=true "Chatty")

### Usage

Clone the application and create your own git repo.

```
git clone git@github.com:DorianKwan/chatty-app.git
git remote rm origin
git remote add origin [YOUR NEW REPOSITORY]
```

Install the dependencies and start the server.

```
npm install
```
Once installed you are ready to use Chatty ! Enjoy
Note: Both the app server and the websocket server must be running to use Chatty (requires two command line tabs)

```
// First tab
cd chatty-app
npm start 
// Second tab
cd chatty-server
node wsserver.js
visit http://localhost:3000
```
