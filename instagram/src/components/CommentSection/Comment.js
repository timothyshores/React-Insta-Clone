import React from 'react';
import PropTypes from 'prop-types';
import './Comment.css';

const Comment = props => {
    console.log('Comment props', props);
    return (
        <h2>Comment Component</h2>
    );
};

Comment.propTypes = {

};


export default Comment;