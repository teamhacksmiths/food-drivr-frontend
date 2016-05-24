import React from 'react';

const HowItWorksSubSection = (props) => (
  <section>
    <header className="text-center">
      <img src={props.imgSrc} alt={props.imgAlt} className="img" />
      <div className="uppercase">{props.title}</div>
    </header>
      <p className="text-center source-sans">
        {props.children}
      </p>
  </section>
);

HowItWorksSubSection.propTypes = {
  imgSrc: React.PropTypes.string.isRequired,
  imgAlt: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
  children: React.PropTypes.string.isRequired
};

module.exports = HowItWorksSubSection;
