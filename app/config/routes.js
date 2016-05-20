import React from 'react';
import { browserHistory, Router, Route, IndexRoute } from 'react-router';
import DonationList from '../components/donation-components.jsx';
import ThankYou from '../components/thank-you-components.jsx';
import Registration from '../containers/registration-container.jsx';
import auth from '../utils/auth.js';
import injectTapEventPlugin from 'react-tap-event-plugin';
import * as Pages from '../pages';
injectTapEventPlugin();

function requireAuth(nextState, replace) {
	if (!auth.loggedIn()) {
		replace({
			pathname: '/',
			state: { nextPathname: nextState.location.pathname }
		});
	}
}

const routes = (
	<Router history={browserHistory}>
		<Route path="/" component={Pages.App}>
			<IndexRoute component={Pages.HomePage} />
			<Route path="signin" component={Pages.SignInPage} />
			<Route path="signup" component={Pages.UserTypePage} />
			<Route path="signup/donor" component={Registration} header="Donor" />
			<Route path="signup/volunteer" component={Registration} header="Volunteer" />
			<Route path="donation" component={DonationList} onEnter={requireAuth} />
			<Route path="thankyou" component={ThankYou} />
			<Route path="profile" component={Pages.UserProfilePage} onEnter={requireAuth} />
			<Route path="thankyou/:userType" component={ThankYou} />
		</Route>
	</Router>
);

module.exports = routes;
