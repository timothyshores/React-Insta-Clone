import React from 'react';
import styled from 'styled-components'

import './Posts.css';

const PostHeaderDiv = styled.div`
    display: flex;
`;

const PostThumbWrapper = styled.div`
    height: 50px;
    width: 50px;
`;

const PostHeader = props => {
    return (
        <PostHeaderDiv>
            <PostThumbWrapper>
                <img
                    alt="post header"
                    className="post-thumb"
                    src={props.thumbnailUrl}
                />
            </PostThumbWrapper>
            <div>{props.username}</div>
        </PostHeaderDiv>
    );
};

export default PostHeader;