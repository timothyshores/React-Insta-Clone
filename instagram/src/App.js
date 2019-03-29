import React, { Component } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import data from './dummy-data';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
            filteredPosts: [],
            search: ''
        };
    }

    componentDidMount() {
        this.setState({ data: data });
    }

    searchPostsHandler = event => {
        console.log('searchPostsHandler', event.target.value);
        this.setState({
            search: event.target.value,
            filteredPosts:
                this.state.data.filter(post => {
                    if (post.username.includes(event.target.value)) {
                        console.log('post', post);
                        return post;
                    }
                })
        });
    };

    handleSearch = event => {
        if (event.target.value === '') {
            console.log('empty search');
            this.setState({ data: data });
        }
        this.setState({
            search: event.target.value,
            filteredPosts: this.state.data.filter(post => post.username.includes(event.target.value))
        });
    };


    render() {
        return (
            <div className="App">
                <SearchBar search={this.state.search} handleSearch={this.searchPostsHandler} />
                {this.state.search.length > 0 ?
                    this.state.filteredPosts.map(post => (
                        <PostContainer post={post} key={post.imageUrl} />
                    )) :
                    this.state.data.map(post => (
                        <PostContainer post={post} key={post.imageUrl} />
                    ))
                }
            </div>
        );
    }
}

export default App;
