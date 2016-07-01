import React from 'react';

const p1 = `We really apprecaite you taking the time to sign up and
  offering your time and effort in helping us eliminate food waste.`;

const p2 = `Your generous donations will help us in
  our goal of eliminating hunger in this country.`;

const p3 = `You have two options for initiating a donation.
  You can do it via the web, click the link below, or download the iOS app from the App Store.`;

const thankYou = 'Thank you again!';

const DonorThankYou = () => (
  <div>
    <p>{p1}</p>
    <p>{p2}</p>
    <p>{p3}</p>
    <p>{thankYou}</p>
  </div>
);

export default DonorThankYou;
