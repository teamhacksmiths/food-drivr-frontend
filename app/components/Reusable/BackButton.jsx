import React from 'react';

class BackButton extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.displayName = 'BackButton';
		this.handleGoBack = this.handleGoBack.bind(this);
	}

	handleGoBack() {
		this.context.router.goBack();
	}

	render() {
		return (
			<div className="back-button" onClick={this.handleGoBack}></div>
		);
	}
}

BackButton.contextTypes = {
	router: React.PropTypes.object.isRequired
};

module.exports = BackButton;
