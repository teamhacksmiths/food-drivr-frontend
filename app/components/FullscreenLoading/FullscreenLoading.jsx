import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';

const FullscreenLoading = props => {
  return(
    <div className={props.isLoading ? 'fullscreen-loader' : 'fullscreen-loader hidden'}>
      <CircularProgress />
    </div>
  );
}

export default FullscreenLoading;
