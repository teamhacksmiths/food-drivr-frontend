import React from 'react';
import { Link } from 'react-router';

const SectionContacts = () => (
  <section className="contacts text-white">
    <p>If you have any question or comments, please don&#39;t hesitate to contact us.</p>
    <p>1 650-253-0000</p>
    <section className="contacts__email">
      susie@benefitbrownies.organization
    </section>
    <section>
      <Link to="" role="button">
        <img
          src="images/facebook-icon-footer.svg"
          alt="facebook icon"
          className="contacts__social-icon"
        />
      </Link>
      <Link to="" role="button">
        <img
          src="images/Twitter-Icon-footer.svg"
          alt="twitter icon"
          className="contacts__social-icon"
        />
      </Link>
    </section>
    <footer className="contacts__copyright text-center">
      © Copyright Benefit Brownies 2016
    </footer>
  </section>
);

export default SectionContacts;
