var SignInPage = React.createClass({
    render: function(){
        return (
			<div className="signin">
				<Header />
				<div className="container">
      				<Headline value="Sign In" />
					<SignInForm />
				</div>
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
    render: function(){
        return (
                <a href="/#donation" role="button" className='btn btn-info'>Enter</a>
            );
    }
});

ReactDOM.render(
    <SignInPage />,
    document.getElementById('react')
);
