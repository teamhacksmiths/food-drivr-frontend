import React from 'react';

const UserTypeButton = ({ onSubmit, imgSrc, imgAlt, title }) => (
  <section onClick={onSubmit} className="selection flex-grow-1 text-center">
    <img src={imgSrc} alt={imgAlt} />
    <span onClick={onSubmit}>{title}</span>
  </section>
);

UserTypeButton.propTypes = {
  onSubmit: React.PropTypes.func,
  imageSrc: React.PropTypes.string.isRequired,
  imageAlt: React.PropTypes.string,
  title: React.PropTypes.string.isRequired
};

module.exports = UserTypeButton;
