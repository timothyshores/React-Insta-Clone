import React from 'react';
import IGLogo from '../../assets/instagram-text.png';
import styled from 'styled-components'

const SearchBarWrapper = styled.div`
  border-bottom: 1px solid #3333;
  height: 80px;
  line-height: 70px;
  display: flex;
  justify-content: space-between;
  background: #ffffff;
`;

const ImageWrapper = styled.div`
    height: 50px;
    margin: 20px 10px;
`;

const SocialWrapper = styled.div`
    display: flex;
`;

const Social = styled.div`
    width: 50px;
`;

const SearchBar = props => {
    return (
        <SearchBarWrapper>
            <ImageWrapper>
                <img alt="instagram logo" src={IGLogo} style={{ height: "100%" }} />
            </ImageWrapper>
            <div>
                <input type="text" placeholder="Search" onKeyDown={props.searchPosts} />
            </div>
            <SocialWrapper>
                <Social>
                    <i className="fa fa-compass" />
                </Social>
                <Social>
                    <i className="fa fa-heart" />
                </Social>
                <Social>
                    <i className="fa fa-user-circle" />
                </Social>
            </SocialWrapper>
        </SearchBarWrapper>
    )
};

export default SearchBar;