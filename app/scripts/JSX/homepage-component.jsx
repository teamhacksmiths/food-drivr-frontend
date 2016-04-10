var HomePage = React.createClass({
    render: function(){
        return (
            <div className="homepage">
                <Header />
                <BodySection />
                <Footer />
            </div>
            );
    }
});

var Header = React.createClass({
    render: function(){
        return (
                <div className="header text-flex">
                    <h3 className='text-grey'>Food Taxi Logo</h3>
                    <Login />
                </div>
            );
    }
});

var Login = React.createClass({
    render: function(){
        return (
                <h3 className='text-margin-left'>
                <a className='text-grey' href='#'>Login</a></h3>
            );
    }
})

var BodySection = React.createClass({
    render: function(){
        return (
            <div className="container">
            <h1 className="text-center">Food Taxi Headline!</h1>
            <p className="lead text-center text-grey">Waste Not Food Taxi is simple. Organizations with leftover edible food sign up with our service and our volunteers are notified via an app to accept your donation. We send over a volunteer to pick up the food and get it to the nearest hunger relief
                partner.
            </p>
            <p className="text-center">
                <BodyButton />
            </p>
        </div>
            );
    }
});

var BodyButton = React.createClass({
    render: function(){
        return (
            <button className="btn btn-custom" href="#">Join Us</button>
            );
    }
});

var Footer = React.createClass({
    render: function(){
        return (
            <div className="footer">
                <p>Made with ♥ by <a href="http://hacksmiths.io">Team Hacksmiths</a></p>
            </div>
            );
    }
})

ReactDOM.render(
    <HomePage />,
    document.getElementById('react')
);