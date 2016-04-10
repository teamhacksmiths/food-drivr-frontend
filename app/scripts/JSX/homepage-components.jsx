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
                <a href="/#signup" role="button" className='btn btn-custom'>Join Us</a>
            );
    }
});

var BodySection = React.createClass({
    render: function(){
        return (
            <div className='well'>
            <p className='lead text-center text-grey'>Waste Not Food Taxi is simple. Organizations with leftover edible food sign up with our service and our volunteers are notified via an app to accept your donation. We send over a volunteer to pick up the food and get it to the nearest hunger relief partner.
            </p>
            <span className='text-center'>
                <BodyButton />
            </span>
            </div>
            );
    }
});