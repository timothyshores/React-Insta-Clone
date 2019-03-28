import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CommentWrapper = styled.div`
    margin: 7.5px 0;
    text-align: left;
`;

const Username = styled.span`
    font-weight: 700;
    margin: 7.5px 0;
`;

const CommentText = styled.span`
    margin-left: 10px;
`;
const Comment = props => {
    const { username, text } = props.comment;
    return (
        <CommentWrapper>
            <Username>{username}</Username>
            <CommentText>{text}</CommentText>
        </CommentWrapper>
    );
};

Comment.propTypes = {

};


export default Comment;