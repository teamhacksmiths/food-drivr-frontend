import React from 'react';
import { Link } from 'react-router';

const AppStoreIcon = props => (
	<Link to="" className={props.className}>
		<img src="/images/App-Store-Badge.png" alt="apple store icon" />
	</Link>
);

AppStoreIcon.propTypes = {
	className: React.PropTypes.string
};

module.exports = AppStoreIcon;
