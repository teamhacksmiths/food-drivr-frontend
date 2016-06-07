import React from 'react';
import { Link } from 'react-router';

const oops = "OOPS,"
const message = "Because of all the amazing people dontaing food our servers appear to be having a problem.  Please come back later or contact our support team to report the problem.";
const thanks = "Thanks again for supporting Food Drivr!";
const somethingGoneWrong = "something appears to have gone wrong";

const SomethingWentWrong = () => (
  <div className="container something_went_wrong__container">
    <section className="something_went_wrong__section">
      <header className="text-center text-white">
          <Link to="/">
            <div className="something_went_wrong__truck"></div>
          </Link>
      </header>
          <h1 className="something_went_wrong__header">{oops}</h1>
          <h2 className="something_went_wrong__subheader">{somethingGoneWrong}</h2>
          <div className="something_went_wrong__paragraph-container">
            <p className="something_went_wrong__paragraph-text">{message}</p>
            <p className="something_went_wrong__paragraph-text">{thanks}</p>
            <div className="text-center">
              <Link to="mailto: admin@fooddrivr.com">
                <button className="btn btn-contact">Contact Support</button>
              </Link>
            </div>
        </div>
    </section>
  </div>
);

export default SomethingWentWrong;
