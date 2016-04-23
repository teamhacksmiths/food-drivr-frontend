import HomePage from './JSX/homepage-components.jsx';
import SignInPage from './JSX/signin-components.jsx';
import SignUpPage from './JSX/signup-components.jsx';
import SignUpDonor from './JSX/signupdonor-components.jsx';
import SignUpVolunteer from './JSX/signupvolunteer-components.jsx';
import { Header, Footer } from './JSX/reusable-components.jsx';
import DonationPage from './JSX/donation-components.jsx';
import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory, Router, Route, IndexRoute } from 'react-router';


export default class App extends React.Component {
        render() {
                return (
                        <div className="container">
            <Header />
              {this.props.children}
                  <Footer />
            </div>
        )
    }
}

ReactDOM.render((
    <Router history={browserHistory}>
      <Route path="/" component={App}> 
        <IndexRoute component={HomePage} />
          <Route path="signin" component={SignInPage} />
          <Route path="signup" component={SignUpPage}>
                <Route path="donor" component={SignUpDonor} />
                <Route path="volunteer" component={SignUpVolunteer} />
            </Route>
          <Route path="donation" component={DonationPage} />
      </Route>
    </Router>
  ),document.getElementById('Main')
);