import React from 'react';
import { Link } from 'react-router';
import WhiteTruckButton from '../Reusable/WhiteTruckButton.jsx';

const oops = 'oops,';
const message = 'Because of all the amazing people dontaing food our servers appear to be having a problem.  Please come back later or contact our support team to report the problem.';
const thanks = 'Thanks again for supporting Food Drivr!';
const somethingGoneWrong = 'something appears to have gone wrong';

const SomethingWentWrong = () => (
  <section className="something-went-wrong__section text-center text-white">
    <header className="uppercase">
      <WhiteTruckButton />
      <h1 className="something-went-wrong__header">{oops}</h1>
      <h2 className="something-went-wrong__subheader">{somethingGoneWrong}</h2>
    </header>
    <div className="something-went-wrong__paragraph-container">
      <p>{message}</p>
      <p>{thanks}</p>
    </div>
    <Link to="mailto: admin@fooddrivr.com">
      <button className="btn btn-rect--hover bg-white text-red">Contact Support</button>
    </Link>
  </section>
);

export default SomethingWentWrong;
