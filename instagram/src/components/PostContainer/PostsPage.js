import React, { Component } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import PostContainer from './PostContainer';
import data from '../../dummy-data';

class PostsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            filteredPosts: [],
            search: '',
            signedIn: false,
        };
    }

    componentDidMount() {
        this.setState({ data: data });
    }

    searchPostsHandler = event => {
        this.setState({
            search: event.target.value,
            filteredPosts:
                this.state.data.filter(post => {
                    if (post.username.includes(event.target.value)) {
                        return post;
                    }
                    return post;
                })
        });
    };

    handleSearch = event => {
        if (event.target.value === '') {
            this.setState({ data: data });
        }
        this.setState({
            search: event.target.value,
            filteredPosts: this.state.data.filter(post => post.username.includes(event.target.value))
        });
    };

    render() {
        console.log('PostsPage render', this.state);
        return (
            <div className="posts-page">
                <SearchBar search={this.state.search} handleSearch={this.state.handleSearch} />
                <PostContainer
                    posts={
                        this.state.search.length > 0
                            ? this.state.filteredPosts
                            : this.state.data
                    }
                />
            </div>
        );
    }
};

export default PostsPage;