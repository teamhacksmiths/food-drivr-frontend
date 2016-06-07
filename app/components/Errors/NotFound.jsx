import React from 'react';
import { Link } from 'react-router';
const oops = () => <b>OOPS,</b>;
const subHeader = "WE CAN'T SEEM TO FIND THE PAGE YOU'RE LOOKING FOR";
const paragraphText = "Sorry no page could be found at this address. You can also click on our logo above to be taken back to the Home page.";

const NotFound = () => (
  <div className="container not-found__container">
    <section className="not-found__section">
      <header className="text-center text-white">
          <Link to="/">
            <div className="not-found__truck"></div>
          </Link>
      </header>
          <h1 className="not-found__header">{oops}</h1>
          <h2 className="not-found__subheader">{subHeader}</h2>
          <div className="not-found__paragraph-container">
            <p className="not-found__paragraph-text">{paragraphText}</p>
          </div>
    </section>
  </div>
);

export default NotFound;
