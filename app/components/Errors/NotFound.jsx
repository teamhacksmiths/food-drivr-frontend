import React from 'react';
import { Link } from 'react-router';

const NotFound = () => (
  <div className="container not-found__container">
    <section className="not-found__section">
      <header className="text-center text-white">
          <Link to="/">
            <div className="not-found__truck"></div>
          </Link>
      </header>
          <h1 className="not-found__header">OOPS,</h1>
          <h2 className="not-found__subheader">WE CAN'T SEEM TO FIND THE PAGE YOU'RE LOOKING FOR</h2>
          <div className="not-found__paragraph-container">
            <p className="not-found__paragraph-text">Sorry no page could be found at this address. You can also click on our logo above to be taken back to the Home page.</p>
          </div>
    </section>
  </div>
);

export default NotFound;
