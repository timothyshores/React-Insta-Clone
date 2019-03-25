import React from 'react';
import './PostContainer.css';
import CommentSection from '../CommentSection/CommentSection';

const PostContainer = props => {
    console.log(props);
    return (
        <div className="post-container">
            <h2>PostContainer Component</h2>
            <CommentSection comments={props.post.comments} />
        </div>
    );
};

export default PostContainer;