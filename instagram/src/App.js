import React, { Component } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import PostsPage from './components/PostsContainer/PostsContainer';
import dummyData from './dummy-data';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <SearchBar />
        <PostsContainer />

      </div>
    );
  }
}

export default App;
