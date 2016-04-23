import {Headline} from './reusable-components.jsx';
import React from 'react';

var DonationPage = React.createClass({
    render: function(){
        return (
            <div className="donation">
                <FoodBar />
                <hr />
                <FoodTable />
            </div>
        );
    }
});

var BusinessName = React.createClass({
    render: function(){
        return (
            <h1 className='business-title text-center'>{this.props.value}</h1>
        );
    }
});

var FoodBar = React.createClass({
    render: function(){
        return (
            <div id="donation-list">
                <BusinessName value="Jane Doe Catering" />
                <div id="add-donation" className="row">
                    <input type="text" placeholder="Enter Donation Here" className="donation-box col-xs-9" id="new-donation" />
                    <div className="col-xs-1"></div>
                <FoodButton />
                </div>
            </div>
        );
    }
});

var FoodButton = React.createClass({
    render: function(){
        return (
            <button onClick={this.addDonation} className="btn-add text-center col-xs-2">Add</button>
            );
    }
});

var FoodTable = React.createClass({
    render: function(){
        return (
            <div id="past-donations well">
                <h4 className="text-left">Past Donations</h4>
                <ul id="past-donations-list">
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
                <button id="view-more" className="btn-small center-block" type="button">View More</button>
            </div>
        );
    }
});

const PendingDonations = [
     /*Dummy Data*/
        {
        id: '4a068c42-75b2-4ae2-bd0d-284b4abbb8f0',
        donation: '4 lbs of pasta'
        },
        {
        id: '4e81fc6e-bfb6-419b-93e5-0242fb6f3f6a',
        donation: '3 cans of soup'
        },
        {
        id: '11bbffc8-5891-4b45-b9ea-5c99aadf870f',
        donation: '4 bags of potatos'
        }
    ];

module.exports = DonationPage;