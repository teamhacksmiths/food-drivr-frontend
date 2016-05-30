import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';

const FullscreenLoading = ({ isLoading }) => (
  <div className={isLoading ? 'fullscreen-loader' : 'fullscreen-loader hidden'}>
    <CircularProgress />
  </div>
);

FullscreenLoading.propTypes = {
  isLoading: React.PropTypes.bool.isRequired
};

export default FullscreenLoading;
