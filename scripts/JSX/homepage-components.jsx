import { Headline } from './reusable-components.jsx';
import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import $ from 'jquery';
import messages from '../utils/messages';

var BodyButton = React.createClass({
  render: function(){
    return (
      <Link
        to="/signup"
        role="button"
        className='button-home'
      >
      { messages.JOIN_US }
    </Link>
    );
  }
});

var SectionIntro = React.createClass({
  render: function(){
    return (
      <div className='homepage-intro'>
        <p className="text-center text-grey">{ messages.FOOD_DRIVR }</p>
        <p className='text-center text-grey'>{ messages.SECTION_INTRO_POWERING_DONATIONS }</p>
        <p className='text-center text-grey'>{ messages.SECTION_INTRO_FOR }</p>
				<Headline
          value={ messages.SECTION_INTRO_HEADLINE }
        />
				<p className='lead text-center text-grey'>
          { messages.SECTION_INTRO_P1 }<br/><br/>
          { messages.SECTION_INTRO_P2 }<br/>
          { messages.SECTION_INTRO_P3 }
				</p>
        <br/>
        <div className='text-center'>
          <BodyButton />
        </div>
      </div>
		);
	}
});

var SectionHowTo = React.createClass({
  render: function(){
    return (
      <div className='homepage-howto'>
        <Headline value="HOW IT WORKS"/>
        <div className='howtodiv'>
          <p>DONATING</p>
          <br/>
          <p className="text-center">
            After signing up, donors can enter in items they wish to donate to those in need. Once items are donated, a notification is sent out to all drivers of a pending donation.
          </p>
        </div>
        <div className='howtodiv'>
          <p>PICKUP</p>
          <br/>
          <p className="text-center">
            Drivers receive notification of a pending donation and can choose to accept. Upon accepting, they will be given all of the information about the pending donation.
          </p>
        </div>
        <div className='howtodiv'>
          <p>DELIVERY</p>
          <br/>
          <p className="text-center">
            After the pick up of a donation has been completed, drivers deliver the donation to the nearest pre-determined organization recipient.
          </p>
        </div>
      </div>
    );
  }
});

var HomePage = React.createClass({
  render: function(){
    return (
      <div className='homepage'>
        <SectionIntro />
        <SectionHowTo />
      </div>
    );
  }
});

module.exports = HomePage;
