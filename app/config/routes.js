/*Dependencies*/
import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory, Router, Route, IndexRoute } from 'react-router';
/*Components*/
import App from '../components/main.js';
import HomePage from '../components/homepage-components.jsx';
import SignInPage from '../components/signin-components.jsx';
import SignUpPage from '../components/signup-components.jsx';
import DonationList from '../components/donation-components.jsx';
import ThankYou from '../components/thank-you-components.jsx';
import Registration from '../containers/registration-container.jsx';
import auth from '../utils/auth.js';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

function requireAuth(nextState, replace) {
	if (!auth.loggedIn()) {
		replace({
			pathname: '/signin',
			state: { nextPathname: nextState.location.pathname }
		})
	}
}

var routes = (
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={HomePage} />
			<Route path="signin" component={SignInPage} />
			<Route path="signup" component={SignUpPage} />
			<Route path="signup/donor" component={Registration} header="Donor"/>
				<Route path="signup/volunteer" component={Registration} header="Volunteer"/>
			<Route path="donation" component={DonationList} onEnter={requireAuth}/>
			<Route path="thankyou" component={ThankYou} />
		</Route>
	</Router>
);

module.exports = routes;
