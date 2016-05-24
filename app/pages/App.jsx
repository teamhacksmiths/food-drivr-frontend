import React from 'react';
import Header from '../components/Reusable/Header.jsx';
import Footer from '../components/Reusable/Footer.jsx';
import classNames from 'classnames/bind';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends React.Component {
  render() {
    const containerClass = classNames({
      container: true,
      'blue-background': window.location.pathname === '/',
      'red-background': window.location.pathname === '/signup' || window.location.pathname === '/signin',
      'lightgrey-background': window.location.pathname === '/donation',
      'yellow-background': window.location.pathname === '/signup/donor',
      'lightblue-background': window.location.pathname === '/signup/volunteer'
    });
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <div className={containerClass}>
          <Header />
          <ReactCSSTransitionGroup transitionName="appear" transitionEnterTimeout={500} transitionLeaveTimeout={500}>
            {React.cloneElement(this.props.children, {key: this.props.location.pathname})}
          </ReactCSSTransitionGroup>
          <Footer />
        </div>
      </MuiThemeProvider>
    );
  }
}

module.exports = App;
