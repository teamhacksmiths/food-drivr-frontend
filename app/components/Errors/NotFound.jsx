import React from 'react';
import WhiteTruckButton from '../Reusable/WhiteTruckButton.jsx';

const oops = 'OOPS,';
const subHeader = 'WE CAN\'T SEEM TO FIND THE PAGE YOU\'RE LOOKING FOR';
const paragraphText = 'Sorry no page could be found at this address. You can also click on our logo above to be taken back to the Home page.';

const NotFound = () => (
    <section className="something-went-wrong__section text-center text-white">
      <header className="uppercase">
          <WhiteTruckButton />
          <h1 className="something-went-wrong__header">{oops}</h1>
          <h2 className="something-went-wrong__subheader">{subHeader}</h2>
      </header>
      <div className="something-went-wrong__paragraph-container">
        <p>{paragraphText}</p>
      </div>
    </section>
);

export default NotFound;
