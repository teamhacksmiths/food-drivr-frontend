import React from 'react';

const UserTypeButton = ({ onSubmit, imgSrc, imgAlt, title }) => (
  <section onClick={onSubmit} className="signup__selection flex-grow-1 text-center">
    <img src={imgSrc} alt={imgAlt} />
    <span onClick={onSubmit}>{title}</span>
  </section>
);

UserTypeButton.propTypes = {
  onSubmit: React.PropTypes.func,
  imgSrc: React.PropTypes.string.isRequired,
  imgAlt: React.PropTypes.string,
  title: React.PropTypes.string.isRequired
};

module.exports = UserTypeButton;
