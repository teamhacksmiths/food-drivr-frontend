import { Header, Headline, Footer } from './reusable-components.jsx';
import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'rrtr';

var BodyButton = React.createClass({
    render: function(){
        return (
            <Link to="/signup" role="button" className='btn btn-info'>Join Us</Link>
        );
    }
});

var BodySection = React.createClass({
	render: function(){
		return (
			<div className='homepage-content well'>
				<Headline value="Food Taxi Headline!"/>
				<p className='lead text-center text-grey'>Waste Not Food Taxi is simple. Organizations with leftover edible food sign up with our service and our volunteers are notified via an app to accept your donation. We send over a volunteer to pick up the food and get it to the nearest hunger relief partner.
				</p>
				<div className='text-center'>
					<BodyButton />
				</div>
			</div>
		);
	}
});

var HomePage = React.createClass({
    render: function(){
        return (
            <div className='homepage'>
                <Header />
                <BodySection />
                <Footer />
            </div>
        );
    }
});

module.exports = HomePage;