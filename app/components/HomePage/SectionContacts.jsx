import React from 'react';
import { Link } from 'react-router';

const SectionContacts = () => (
  <div className="homepage-contacts text-white">
    <p>If you have any question or comments, please don&#39;t hesitate to contact us.</p>
    <p>1 650-253-0000</p>
    <div className="email">
      susie@benefitbrownies.organization
    </div>
    <div className="contacts-social">
      <Link to="" role="button">
        <img src="images/facebook-icon-footer.svg" alt="facebook icon" className="social-icon" />
      </Link>
      <Link to="" role="button">
        <img src="images/Twitter-Icon-footer.svg" alt="twitter icon" className="social-icon" />
      </Link>
    </div>
    <div className="copyright text-center">
      © Copyright Benefit Brownies 2016
    </div>
  </div>
);

module.exports = SectionContacts;
