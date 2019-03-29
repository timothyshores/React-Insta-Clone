import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import CommentSection from '../CommentSection/CommentSection';
import comment from './comment.png';

const PostContainerWrapper = styled.div`
    max-width: 50vw;
    margin: 15px auto;
`;

const UsernameAvatarWrapper = styled.div`
    display: flex;
    align-items: center;
`;

const Avatar = styled.img`
    height: 20px;
`;

const Username = styled.p`
    margin-left: 15px;
    font-weight: 600;
`;

const LikeCommentIcons = styled.div`
    display: flex;
    align-items: baseline;
`;

const HeartIcon = styled.p`
    font-size: 2rem;
    font-weight: 100;
    margin: 0;
`;

const CommentIcon = styled.img`
    height: 25px;
    margin-left: 10px;
`;

const Likes = styled.div`
    text-align: left;
    font-weight: 600;
    margin: 10px 0;
`;

class PostContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: this.props.post,
            likes: this.props.post.likes,
        };
    }

    likePost = event => {
        this.setState({ likes: ++this.state.likes });
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({
            posts: this.props.posts,
        });
    }

    render() {
        const { thumbnailUrl, username, imageUrl } = this.state.posts;
        return (
            <PostContainerWrapper>
                <UsernameAvatarWrapper>
                    <Avatar
                        src={thumbnailUrl}
                        alt="user avatar"
                    />
                    <Username>
                        {username}
                    </Username>
                </UsernameAvatarWrapper>
                <div className="image">
                    <img src={imageUrl} alt="users post" />
                </div>
                <LikeCommentIcons>
                    <HeartIcon onClick={this.likePost}>♡</HeartIcon>
                    <CommentIcon
                        src={comment}
                        alt="comment icon"
                    />
                </LikeCommentIcons>
                <Likes>{this.state.likes} likes </Likes>
                <CommentSection comments={this.state.posts.comments} />
            </PostContainerWrapper>
        );
    }
}

PostContainer.propTypes = {

};

export default PostContainer;