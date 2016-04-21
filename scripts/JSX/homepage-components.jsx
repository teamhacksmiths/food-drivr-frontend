import { Header, Headline, Footer } from './reusable-components.jsx';
import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';
import $ from 'jquery';


var BodyButton = React.createClass({
    render: function(){
        return (
            <Link to="/signup" role="button" className='button-home'>JOIN US</Link>
        );
    }
});

var SectionIntro = React.createClass({
	render: function(){
		return (
			<div className='homepage-content'>
				<Headline value="WASTE NOT FOOD TAXI"/>
				<p className='lead text-center text-grey'>On a daily basis, businesess like catering facilities, restaurants, grocery stores, as well as individuals produce more food than what is necessary for them to meet their needs.
                <br/>
                <br/>
                Organizations that utilize Food Drivr help deliver this excess to people in need.
                <br/>
                Join us and help end hunger.
				</p>
                <br/>
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
                    <SectionIntro />
                <Footer />
            </div>
        );
    }
});

module.exports = HomePage;