import React from 'react';

const UserTypeButton = ({ onSubmit, imageSrc, imageAlt, title }) => (
  <div onClick={onSubmit} className="btn-signup pointer-cursor">
    <img src={imageSrc} alt={imageAlt} />
    <button className="btn-signup" type="submit">{title}</button>
  </div>
);

UserTypeButton.propTypes = {
  onSubmit: React.PropTypes.func,
  imageSrc: React.PropTypes.string.isRequired,
  imageAlt: React.PropTypes.string,
  title: React.PropTypes.string.isRequired
};

module.exports = UserTypeButton;
