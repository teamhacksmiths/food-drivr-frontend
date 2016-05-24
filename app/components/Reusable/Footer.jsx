import React from 'react';
import { Link } from 'react-router';
import classNames from 'classnames/bind';

const Footer = () => {
  const footerClass = classNames({
    footer: true,
    'text-center': true,
    'text-black': window.location.pathname === '/donation',
    'text-white': window.location.pathname !== '/donation'
  });
  return (
    <footer className={footerClass}>
      <p>Made with ♥ by <Link to="http://hacksmiths.io">Team Hacksmiths</Link></p>
    </footer>
  );
};

module.exports = Footer;
