var SignInPage = React.createClass({
    render: function(){
        return (
            <div className="signin">
                <Header />
                <h1 className="text-center">Sign In</h1>
                <SignInForm />
                <Footer />
            </div>
            );
    }
});

var SignInForm = React.createClass({
    render: function(){
        return (
            <form action="">
                <div className="form-group">
                    <input type="email" placeholder="Email" id="signup-email" className="form-control"/>
                </div>
                <div className="form-group">
                    <input type="password" placeholder="Password" id="signup-password" className="form-control"/>
                </div>
                <p className="text-center">
                    <SignInButton />
                </p>
            </form>
        );
    }
});

var SignInButton = React.createClass({
<<<<<<< c90889390a299d9eb93ab80efeef0c8a2e21cd76:app/scripts/JSX/signin-components.jsx
	render: function(){
		return (
			<button type="submit" className="btn btn-custom">Enter</button>
			);
	}
});
=======
    render: function(){
        return (
            <button type="submit" className="btn btn-custom">Enter</button>
            );
    }
});

ReactDOM.render(
    <SignInPage />,
    document.getElementById('react')
);
>>>>>>> Designed the donations page template for dynamic loading of past donations along with a modal for further description.:app/scripts/JSX/signin-component.jsx
