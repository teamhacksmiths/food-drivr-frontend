import React from 'react';
import { browserHistory, Router, Route, IndexRoute } from 'react-router';
import App from '../pages/App.jsx';
import HomePage from '../pages/HomePage.jsx';
import UserTypePage from '../pages/UserTypePage.jsx';
import SignInPage from '../pages/SignInPage.jsx';
import RegistrationPage from '../pages/RegistrationPage.jsx';
import DonationPage from '../pages/DonationPage.jsx';
import ThankYouPage from '../pages/ThankYouPage.jsx';
import UserProfilePage from '../pages/UserProfilePage.jsx';
import auth from '../utils/auth.js';
import injectTapEventPlugin from 'react-tap-event-plugin';

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
    <Route path="/" component={App}>
      <IndexRoute component={HomePage} />
      <Route path="signin" component={SignInPage} />
      <Route path="signup" component={UserTypePage} />
      <Route path="signup/donor" component={RegistrationPage} header="Donor" />
      <Route path="signup/volunteer" component={RegistrationPage} header="Volunteer" />
      <Route path="thankyou" component={ThankYouPage} />
      <Route path="thankyou/:userType" component={ThankYouPage} />
      <Route path="donation" component={DonationPage} onEnter={requireAuth} />
      <Route path="profile" component={UserProfilePage} onEnter={requireAuth} />
    </Route>
  </Router>
);

module.exports = routes;
