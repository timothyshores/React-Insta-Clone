import React from 'react';
import PropTypes from 'prop-types';
import './Comment.css';

const Comment = props => {
    const { username, text } = props.comment;
    return (
        <div className="comment">
            <span className="username">{username}</span>
            <span className="comment-text">{text}</span>
        </div>
    );
};

Comment.propTypes = {

};


export default Comment;