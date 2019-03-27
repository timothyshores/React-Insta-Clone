import React from 'react';
import './PostContainer.css';
import PropTypes from 'prop-types';
import CommentSection from '../CommentSection/CommentSection';
import comment from './comment.png';


class PostContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: this.props.post,
            likes: this.props.post.likes,
        };
    }

    likePost = event => {
        this.setState({ likes: ++this.state.likes });
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({
            posts: this.props.posts,
        });
    }

    render() {
        const { thumbnailUrl, username, imageUrl } = this.state.posts;
        return (
            <div className="post-container">
                <div className="username-avatar">
                    <img className="avatar" src={thumbnailUrl} alt="user avatar" />
                    <p className="username">{username}</p>
                </div>
                <div className="image">
                    <img src={imageUrl} alt="users post" />
                </div>
                <div className="like-comment-buttons">
                    <p onClick={this.likePost} className="heart-icon">♡</p>
                    <img className="comment-icon" src={comment} alt="comment icon" />
                </div>
                <div className="likes">
                    <p>{this.state.likes} likes</p>
                </div>
                <CommentSection comments={this.state.posts.comments} />
            </div>
        );
    }
}

PostContainer.propTypes = {

};

export default PostContainer;