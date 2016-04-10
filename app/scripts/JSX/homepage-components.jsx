var HomePage = React.createClass({
	render: function(){
		return (
			<div className='homepage'>
				<Header />
				<h1 className='text-center'>Food Taxi Headline!</h1>
				<BodySection />
				<Footer />
			</div>
			);
	}
});

var BodyButton = React.createClass({
	render: function(){
		return (
			<form method="GET" action="/#signup">
    			<button type="submit" className='btn btn-custom'>Join Us</button>
			</form>
			);
	}
});

var BodySection = React.createClass({
	render: function(){
		return (
			<div className='container'>
			<p className='lead text-center text-grey'>Waste Not Food Taxi is simple. Organizations with leftover edible food sign up with our service and our volunteers are notified via an app to accept your donation. We send over a volunteer to pick up the food and get it to the nearest hunger relief partner.
			</p>
			<p className='text-center'>
				<BodyButton />
			</p>
		</div>
			);
	}
});