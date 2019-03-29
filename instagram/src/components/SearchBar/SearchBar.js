import React from 'react';
import instagramLogo from './instagram-logo.jpg';
import discoverIcon from './discover-icon.png';
import profileIcon from './profile-icon.png';
import './SearchBar.css';

import {
    SearchBarWrapper,
    LeftColumn,
    VerticalDivider,
    InstagramLogoText,
    MiddleColumn,
    SearchBarInput,
    RightColumn,
    DiscoverIcon,
    HeartIcon,
    ProfileIcon,
} from './SearchBarComponents';

const SearchBar = props => {
    return (
        <SearchBarWrapper>
            <LeftColumn>
                <i className="instagram-icon" class="fab fa-instagram fa-2x"></i>
                <VerticalDivider> | </VerticalDivider>
                <InstagramLogoText
                    src={instagramLogo}
                    alt="instagram text logo" /
                >
            </LeftColumn>
            <MiddleColumn>
                <SearchBarInput
                    type="text"
                    placeholder="🔍 Search"
                    onChange={props.handleSearch}
                />
            </MiddleColumn>
            <RightColumn>
                <DiscoverIcon
                    src={discoverIcon}
                    alt="discover icon"
                />
                <HeartIcon>♡</HeartIcon>
                <ProfileIcon
                    src={profileIcon}
                    alt="profile icon"
                />
            </RightColumn>
        </SearchBarWrapper>
    );
};

export default SearchBar;