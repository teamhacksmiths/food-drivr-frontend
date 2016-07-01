import React from 'react';

const p1 = `We really appreciate you taking the time to sign
  up and offering your time and effort in helping us
  eliminate food waste.`;

const p2 = `Please follow the link below to download the app from the App Store,
  sign in and you’re ready to go to begin delivering much needed food to those in need.`;

const p3 = 'We will be in contact with you very soon.';

const thankYou = 'Thank you again!';

const VolunteerThankYou = () => (
  <div>
    <p>{p1}</p>
    <p>{p2}</p>
    <p>{p3}</p>
    <p>{thankYou}</p>
  </div>
);

export default VolunteerThankYou;
