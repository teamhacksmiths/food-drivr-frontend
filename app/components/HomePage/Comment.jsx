import React from 'react';

const Comment = ({ text, author, company }) => (
  <div className="comments-container">
    <p>{text}</p>
    <div className="comments-author">
      {author}
    </div>
    <div className="comments-company">
      {company}
    </div>
  </div>
);

Comment.propTypes = {
  text: React.PropTypes.string.isRequired,
  author: React.PropTypes.string.isRequired,
  company: React.PropTypes.string.isRequired
};

module.exports = Comment;
