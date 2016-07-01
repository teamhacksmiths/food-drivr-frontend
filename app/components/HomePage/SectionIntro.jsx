import React from 'react';
import Headline from '../Reusable/Headline.jsx';
import BodyButton from './BodyButton.jsx';
import ScrollDownButton from '../Reusable/ScrollDownButton.jsx';

const foodDrivrTitle = 'Food drivr';
const poweredBy = 'Powering Donations';
const poweredByLineTwo = 'for';
const paragraphOne = `On a daily basis catering facilities, restaurants,
  grocery stores, as well as individuals produce more
  food than what is needed for them to meet their needs.`;
const paragraphTwo = `Using Food Drivr, organizations help
  to deliver excess food to people in need.`;
const joinUs = 'Join us and help end hunger.';

const FoodDrivrTruck = ({
  bobbing
}) => (
    <div
      title="food drivr logo"
      className={bobbing ? 'intro__truck-white bobbing' : 'intro__truck-white'}
    />
);

const SectionIntro = () => (
  <section className="intro">
    <header className="text-center text-white">
      <FoodDrivrTruck
        bobbing
      />
      <p className="uppercase intro__food-drivr">
        {foodDrivrTitle}
      </p>
      <p className="intro__powered">
        {poweredBy}
      </p>
      <p className="intro__powered">
        {poweredByLineTwo}
      </p>
      <Headline
        value="Waste not food taxi"
        className="intro__title uppercase text-center text-white"
      />
    </header>
    <div className="intro__content flex-grow-1 text-center text-white">
      <p>{paragraphOne}</p>
      <p>{paragraphTwo}</p>
      <p>{joinUs}</p>
    </div>
    <div className="flex-grow-3 text-center">
      <BodyButton />
    </div>
    <div
      href="#howto"
      className="intro__scrolldown text-center text-white pointer-cursor"
    >
      <ScrollDownButton
        destination="howItWorks"
        color="white"
        text="Learn more"
      />
    </div>
  </section>
);

export default SectionIntro;
