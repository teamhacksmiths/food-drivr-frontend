import React from 'react';
import { Link } from 'react-router';
import { PropTypes } from 'react';
import auth from '../utils/auth.js';

var DonationsList = React.createClass({
    propTypes: {
      value: PropTypes.string.isRequired,
      addDonation: PropTypes.func.isRequired
    },
    getInitialState: function(){
      return {
      currentDonation: []
      };
    },
    render: function() {
      const token = auth.getToken();
      return (
      <div className="donations">    
        <div id="donation-list">
          <h1 className='business-title text-center'>{ this.props.value }</h1>
          <div id="add-donation" className="row">
            <input type="text" placeholder="Enter Donation Here" className="donation-box col-xs-9" id="new-donation" />
            <div className="col-xs-1"></div>
              <button
                onClick={ this.addDonation }
                className="btn-add text-center col-xs-2"
              >
              Add
            </button>
          </div>
        </div>
        <hr/>
        <div id="past-donations well">
        <h4 className="text-left">Past Donations</h4>
      <ul id="past-donations-list"> on 
          <li id="template" className="row">
            <div className="col-xs-6">
              <h4>ST JUDE</h4>
              <p>March 22, 2016</p>
            </div>
            <div className="col-xs-6 foodtype">
              <div id="food-item1">4 trays of lasagne</div>
            </div>
          </li>
          <li id="template" className="row">
            <div className="col-xs-6">
              <h4>City Mission</h4>
              <p>March 21, 2016</p>
            </div>
            <div className="col-xs-6 foodtype">
              <div id="food-item1">3 dozen bagels</div>
              <div id="food-item2">6 dozen donuts</div>
            </div>
          </li>
        </ul>
        <button
          id="view-more"
          className="btn-small center-block"
          type="button"
        >
        View More
      </button>
    </div><div id="past-donations well">
        <h4 className="text-left">Past Donations</h4>
      <ul id="past-donations-list"> on 
          <li id="template" className="row">
            <div className="col-xs-6">
              <h4>ST JUDE</h4>
              <p>March 22, 2016</p>
            </div>
            <div className="col-xs-6 foodtype">
              <div id="food-item1">4 trays of lasagne</div>
            </div>
          </li>
          <li id="template" className="row">
            <div className="col-xs-6">
              <h4>City Mission</h4>
              <p>March 21, 2016</p>
            </div>
            <div className="col-xs-6 foodtype">
              <div id="food-item1">3 dozen bagels</div>
              <div id="food-item2">6 dozen donuts</div>
            </div>
          </li>
        </ul>
        <button
          id="view-more"
          className="btn-small center-block"
          type="button"
        >
        View More
      </button>
    </div>
    </div>
      );
    }
});

module.exports = DonationsList;