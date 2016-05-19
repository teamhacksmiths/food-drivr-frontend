import React from 'react';

const Comment = (props) => (
	<div className="comments-container">
		<p>{props.text}</p>
		<div className="comments-author">
			{props.author}
		</div>
		<div className="comments-company">
			{props.company}
		</div>
	</div>
);

Comment.propTypes = {
	text: React.PropTypes.string.isRequired,
	author: React.PropTypes.string.isRequired,
	company: React.PropTypes.string.isRequired
};

module.exports = Comment;
