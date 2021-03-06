import React from 'react';
import Header from '../components/Reusable/Header.jsx';
import Footer from '../components/Reusable/Footer.jsx';
import classNames from 'classnames/bind';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends React.Component {
  handleCloseMenu(e) {
    const clickOnMenuItem = e.target.classList.contains('header-menu__item');
    const menuIsVisible = document.querySelector('.header-menu').classList.contains('visible');
    if (!clickOnMenuItem && menuIsVisible) {
      document.querySelector('.header-menu').classList.remove('visible');
      document.querySelector('.header-menu').classList.add('not-visible');
    }
  }

  render() {
    const path = window.location.pathname;
    const validRoutes = ['/signup/volunteer', '/signup/donor', 'donation', 'profile', '/', '/thankyou'];
    const containerClass = classNames({
      container: true,
      'bg-blue': path === '/',
      'bg-red': path === '/signup' || path === '/signin' || validRoutes.indexOf(path) === -1,
      'bg-grey-light': path === '/donation',
      'bg-yellow': window.location.href.indexOf('donor') > -1,
      'bg-blue-light': window.location.href.indexOf('volunteer') > -1,
      'bg-white': path === '/profile'
    });
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <div className={containerClass} onClick={this.handleCloseMenu}>
          <Header />
          <ReactCSSTransitionGroup transitionName="appear" transitionEnterTimeout={500} transitionLeaveTimeout={1}>
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
