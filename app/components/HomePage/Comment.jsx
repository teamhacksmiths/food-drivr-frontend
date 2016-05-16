import React from 'react';

const Comment = (props) => (
	<div className="comments-container">
		<p>{this.props.text}</p>
		<div className="comments-author">
			{this.props.author}
		</div>
		<div className="comments-company">
			{this.props.company}
		</div>
	</div>
);

Comment.propTypes = {
	text: React.PropTypes.string.isRequired,
	author: React.PropTypes.string.isRequired,
	company: React.PropTypes.string.isRequired
};

module.exports = Comment;
