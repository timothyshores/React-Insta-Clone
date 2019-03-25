import React from 'react';
import './PostContainer.css';
import PropTypes from 'prop-types';
import CommentSection from '../CommentSection/CommentSection';
import comment from './comment.png';

const PostContainer = props => {
    const { thumbnailUrl, username, imageUrl, likes } = props.post;
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
                <p className="heart-icon">♡</p>
                <img className="comment-icon" src={comment} alt="comment icon" />
            </div>
            <div className="likes">
                <p>{likes} likes</p>
            </div>
            <CommentSection comments={props.post.comments} />
        </div>
    );
};

PostContainer.propTypes = {

};

export default PostContainer;