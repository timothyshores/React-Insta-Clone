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
        event.preventDefault();
        this.setState({
            comments: [...this.props.comments, {
                username: 'timothyshores',
                text: this.state.newComment
            }],
            newComment: ''
        });
    }

    render() {
        return (
            <div className="comment-section">
                {this.state.comments.map((comment, index) => (
                    <Comment comment={comment} key={index} />
                ))}
                <form
                    className="add-new comment"
                    onSubmit={this.handleSubmit}
                >
                    <input
                        type="text"
                        className="add-comment"
                        placeholder="Add a comment..."
                        value={this.state.newComment}
                        onChange={this.handleChanges}
                    />
                    <button onClick={this.handleSubmit}> Post </button>
                </form>
            </div>
        );
    }
}

CommentSection.propTypes = {

};

export default CommentSection;