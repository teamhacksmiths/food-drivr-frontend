import React from 'react';

const paragraphOneText = `Are you someone who would rather see your
  extra food feed a family in need instead of going to waste?
  We accept donations from businesses and individuals.`;
const paragraphTwoText = `As an extra benefit to all of our donors,
  we provide tax receipts to them so they can
  write their donations off when they do their taxes.`
const paragraphThreeText = 'Sign up now and let us work together to fight hunger!';

const DonorDescription = () => (
  <div>
    <p>{paragraphOneText}</p>
    <p>{paragraphTwoText}</p>
    <p>{paragraphThreeText}</p>
  </div>
);

export default DonorDescription;
