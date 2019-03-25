import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment'
import './CommentSection.css';

const CommentSection = props => {
    const commentsArray = props.comments;
    // console.log('CommentSection props', commentsArray);
    return (
        <div className="comment-section">
            {console.log('commentsArray', commentsArray)}
            {commentsArray.map((comment, index) => (
                <Comment comment={comment} key={index} />
            ))}
            <div className="add-new comment">
                <input type="text" className="add-comment" placeholder="Add a comment..."></input>
            </div>
        </div>
    );
};

CommentSection.propTypes = {

};


export default CommentSection;