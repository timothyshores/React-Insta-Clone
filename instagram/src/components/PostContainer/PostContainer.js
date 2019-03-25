import React from 'react';
import './PostContainer.css';
import PropTypes from 'prop-types';
import CommentSection from '../CommentSection/CommentSection';

const PostContainer = props => {
    const { thumbnailUrl, username, imageUrl, likes } = props.post;
    return (
        <div className="post-container">
            <h2>PostContainer Component</h2>
            {console.log('avatar', thumbnailUrl)}
            {console.log('username', username)}
            {console.log('image', imageUrl)}
            {console.log(likes, 'likes')}
            <CommentSection comments={props.post.comments} />
        </div>
    );
};

PostContainer.propTypes = {

};

export default PostContainer;