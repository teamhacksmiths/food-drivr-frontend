import React from 'react';
import { Link } from 'react-router';

const AppStoreIcon = ({ className }) => (
  <Link to="" className={`header__appstore-icon ${typeof className !== 'undefined' ? className : ''}`} title="app store icon" />
);

AppStoreIcon.propTypes = {
  className: React.PropTypes.string
};

module.exports = AppStoreIcon;
