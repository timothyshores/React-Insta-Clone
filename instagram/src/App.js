import React, { Component } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import CommentSection from './components/CommentSection/CommentSection';
import data from './dummy-data';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            data: []
        };
    }

    componentDidMount() {
        this.setState({ data: data });
    }

    render() {
        return (
            <div className="App">
                <h1>React Instagram Clone</h1>
                <SearchBar />
                {this.state.data.map(post => (
                    <PostContainer post={post} key={post.imageUrl} />
                ))}
                <CommentSection />
            </div>
        );
    }
}

export default App;
