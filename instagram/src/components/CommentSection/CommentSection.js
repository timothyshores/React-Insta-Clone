import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment'
import './CommentSection.css';

const CommentSection = props => {
    const commentsArray = props.comments;
    // console.log('CommentSection props', commentsArray);
    return (
        <div className="comment-section">
            <h2>CommentSection Component</h2>
            {console.log('commentsArray', commentsArray)}
            {commentsArray.map((comment, index) => (
                <Comment comment={comment} key={index} />
            ))}
        </div>
    );
};

CommentSection.propTypes = {

};


export default CommentSection;