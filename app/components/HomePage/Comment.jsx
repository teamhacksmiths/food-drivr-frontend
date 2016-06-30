import React from 'react';

const Comment = ({
  text,
  author,
  company
}) => (
  <section className="comment">
    <q>{text}</q>
    <div className="comment__author">
      {author}
    </div>
    <div className="comment__company">
      {company}
    </div>
  </section>
);

Comment.propTypes = {
  text: React.PropTypes.string.isRequired,
  author: React.PropTypes.string.isRequired,
  company: React.PropTypes.string.isRequired
};

export default Comment;
