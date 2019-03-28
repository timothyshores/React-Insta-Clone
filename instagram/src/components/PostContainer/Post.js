import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import comment from './comment.png';


const Post = props => {
    const { thumbnailUrl, username, imageUrl } = props.posts;
    return (
        <div className="post">
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
            <CommentSection comments={props.posts.comments} />
        </div>
    );
};

export default Post;