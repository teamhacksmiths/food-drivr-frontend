import React from 'react';
import Headline from '../Reusable/Headline.jsx';
import BodyButton from './BodyButton.jsx';
import ScrollDownButton from '../Reusable/ScrollDownButton.jsx';

const SectionIntro = () => (
  <section className="intro">
    <header className="text-center text-white">
      <div title="food drivr logo" className="intro__truck-white" />
      <p className="uppercase">
        Food drivr
      </p>
      <p className="intro__powered">
        Powering Donations For
      </p>
      <Headline value="Waste not food taxi" className="intro__title uppercase text-center text-white" />
    </header>
    <div className="intro__content flex-grow-1 text-center text-white source-sans">
      <p>
        On a daily basis, businesess like catering facilities, restaurants, grocery stores, as well as individuals produce more food than what is necessary for them to meet their needs.
      </p>
      <p>
        Organizations that utilize Food Drivr help deliver this excess to people in need.
      </p>
      <p>
        Join us and help end hunger.
      </p>
    </div>
    <div className="flex-grow-3 text-center">
      <BodyButton />
    </div>
    <div href="#howto" className="intro__scrolldown text-center text-white pointer-cursor">
      <ScrollDownButton destination="" color="white" text="Learn more" />
    </div>
  </section>
);

module.exports = SectionIntro;
