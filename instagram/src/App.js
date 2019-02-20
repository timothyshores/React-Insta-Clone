import React, { Component } from 'react';
import './App.css';
import PostsPage from './components/PostContainer/PostsPage';
import LoginPage from './components/Login/Login';
import withAuthenticate from './components/Authentication/withAuthentication';


class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <ComponentFromWithAuthenticate />
      </div>
    );
  }
}


const ComponentFromWithAuthenticate = withAuthenticate(PostsPage)(LoginPage);

export default App;
