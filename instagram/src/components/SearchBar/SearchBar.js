import React from 'react';
import instagramLogo from './instagram-logo.jpg';
import discoverIcon from './discover-icon.png';
import profileIcon from './profile-icon.png';
import './SearchBar.css';

const SearchBar = props => {
    return (
        <div className="search-bar">
            <div className="left-column">
                <i className="instagram-icon" class="fab fa-instagram fa-2x"></i>
                <span className="vertical-divider"> | </span>
                <img className="instagram-logo" src={instagramLogo} alt="instagram cursive logo"></img>
            </div>
            <div className="middle-column">
                <input
                    type="text"
                    className="search-bar-input"
                    placeholder="🔍 Search"
                    onChange={props.handleSearch}
                />
            </div>
            <div className="right-column">
                <img className="discover-icon" src={discoverIcon} alt="discover icon"></img>
                <p className="heart-icon">♡</p>
                <img className="profile-icon" src={profileIcon} alt="profile icon"></img>
            </div>
        </div>
    );
};

export default SearchBar;