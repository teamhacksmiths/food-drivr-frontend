import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';

const FullscreenLoading = props => (
  <div className={props.isLoading ? 'fullscreen-loader' : 'fullscreen-loader hidden'}>
    <CircularProgress />
  </div>
);

FullscreenLoading.propTypes = {
  isLoading: React.PropTypes.bool.isRequired
};

module.exports = FullscreenLoading;
