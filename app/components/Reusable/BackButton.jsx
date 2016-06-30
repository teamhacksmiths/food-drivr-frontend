daimport React from 'react';

class BackButton extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.handleGoBack = this.handleGoBack.bind(this);
  }

  handleGoBack() {
    this.context.router.goBack();
  }

  render() {
    return (
      <div className="header__back pointer-cursor" onClick={this.handleGoBack}></div>
    );
  }
}

BackButton.contextTypes = {
  router: React.PropTypes.object.isRequired
};

module.exports = BackButton;
