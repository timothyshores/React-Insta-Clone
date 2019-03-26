import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment'
import './CommentSection.css';

class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: [],
            newComment: ''
        };
    }

    componentDidMount() {
        this.setState({ comments: this.props.comments });
    }

    handleChanges = event => {
        this.setState({ newComment: event.target.value });
    }

    handleSubmit = event => {
        this.setState({
            comments: [...this.props.comments, {
                username: 'timothyshores',
                text: this.state.newComment
            }]
        });
    }

    render() {
        return (
            <div className="comment-section">
                {this.state.comments.map((comment, index) => (
                    <Comment comment={comment} key={index} />
                ))}
                <div className="add-new comment">
                    <input
                        type="text"
                        className="add-comment"
                        placeholder="Add a comment..."
                        value={this.state.newComment}
                        onChange={this.handleChanges}
                    />
                    <button onClick={this.handleSubmit}> Post </button>
                </div>
            </div>
        );
    }
}

CommentSection.propTypes = {

};

export default CommentSection;