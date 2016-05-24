import React from 'react';
import { Link } from 'react-router';

const Login = () => (
  <h3 className="source-sans">
    <Link to="/signin" className="text-white">Login</Link>
  </h3>
);

module.exports = Login;
