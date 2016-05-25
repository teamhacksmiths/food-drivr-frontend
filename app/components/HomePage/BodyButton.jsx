import React from 'react';
import { Link } from 'react-router';

const BodyButton = () => (
  <Link to="/signup">
      <button className="btn btn--round bg-red text-white btn--shadow">Join us</button>
  </Link>
);

module.exports = BodyButton;
