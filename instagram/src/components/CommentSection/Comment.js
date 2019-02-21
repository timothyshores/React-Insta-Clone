import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

// import './Comment.css';

const CommentText = styled.div`
    text-align: left;
    padding: 2px;
    margin-left: 4px;
`;

const CommentSpan = styled.span`
    font-weight: 300;
    font-size: 14px;
`;

const user = styled.span`
    font-weight: 500;
    font-size: 12px;
`;

const Comment = props => {
    return (
        <CommentText>
            <CommentSpan>{props.comment.text}</CommentSpan>{' '}
            <span className="user">-{props.comment.username}</span>
        </CommentText>
    );
};

Comment.propTypes = {
    comment: PropTypes.shape({
        text: PropTypes.string,
        username: PropTypes.string
    })
};

export default Comment;