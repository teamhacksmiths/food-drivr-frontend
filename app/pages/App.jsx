import React from 'react';
import Header from '../components/Reusable/Header.jsx';
import Footer from '../components/Reusable/Footer.jsx';
import classNames from 'classnames/bind';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends React.Component {
  render() {
    const validRoutes = ['/signup/volunteer', '/signup/donor','donation', 'profile', '/'];
    const containerClass = classNames({
      container: true,
      'bg-blue': window.location.pathname === '/',
      'bg-red': window.location.pathname === '/signup' || window.location.pathname === '/signin' || validRoutes.indexOf(window.location.pathname) === -1,
      'bg-grey-light': window.location.pathname === '/donation',
      'bg-yellow': window.location.href.indexOf('donor') > -1,
      'bg-blue-light': window.location.href.indexOf('volunteer') > -1
    });
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <div className={containerClass}>
          <Header />
          <ReactCSSTransitionGroup transitionName="appear" transitionEnterTimeout={500} transitionLeaveTimeout={500}>
            {React.cloneElement(this.props.children, { key: this.props.location.pathname })}
          </ReactCSSTransitionGroup>
          <Footer />
        </div>
      </MuiThemeProvider>
    );
  }
}

App.propTypes = {
  location: React.PropTypes.object.isRequired,
  children: React.PropTypes.object.isRequired
};

module.exports = App;
