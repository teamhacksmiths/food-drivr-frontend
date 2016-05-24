import React from 'react';
import { Link } from 'react-router';

const BodyButton = () => (
  <Link to="/signup" role="button" className="button-home">
    JOIN US
  </Link>
);

module.exports = BodyButton;
