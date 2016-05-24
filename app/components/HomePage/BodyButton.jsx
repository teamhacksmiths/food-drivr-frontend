import React from 'react';
import { Link } from 'react-router';

const BodyButton = () => (
  <Link to="/signup" role="button" className="uppercase btn-round btn-red">
    Join us
  </Link>
);

module.exports = BodyButton;
