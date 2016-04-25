import React from 'react';
import $ from 'jquery';
import { Headline } from '../components/reusable-components.jsx';
import DonationsList from '../components/donation-components.jsx';

var DonationPage = React.createClass({
  getInitialState: function(){
    return {
      donations: [],
      authToken: '',
      user: ''
    };
  },
  getDonations: function(){
    $.ajax({
      url: 'https://wastenotfoodtaxi.herokuapp.com/api/v1/donations',
      type: 'GET',
      dataType: 'json',
      processData: false,
      cache: false,
      contentType: 'application/json; charset=UTF-8',
/*      beforeSend: function (xhr){ 
        xhr.setRequestHeader('Authorization', {this.authToken});
      },*/
      success: function(data) {
        this.setState({ donations: data });
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(status, err.toString());
      }.bind(this),
      });
    },
  render: function(){
    return (
      <DonationsList 
        value={this.state.user.name}
      />
    );
  }
});

module.exports = DonationPage;