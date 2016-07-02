import React, { PropTypes } from 'react';
import Geosuggest from 'react-geosuggest';

const GeoSuggest = (props) => (
  <div className="geosuggest__wrapper">
    <label htmlFor="geosuggestInput" className="geosuggest__label">
      Address List
    </label>
    <div className="geosuggest__input-wrapper">
      <Geosuggest
        placeholder="Start typing to add an address to the list!"
        initialValue=""
        id="geosuggestInput"
        onSuggestSelect={props.onSuggestSelect}
        location={new google.maps.LatLng(45.523062, -122.676482)}
        radius="20"
        disabled={!props.isEditing}
      />
      <button
        className="btn button-add btn__geosuggest"
        enabled={props.buttonIsEnabled}
        onClick={props.handleAddAddress}
      />
    </div>
    <span className="geosuggest__highlight"></span>
    <span className="geosuggest__bar"></span>
  </div>
);

Geosuggest.propTypes = {
  onSuggestSelect: PropTypes.func.isRequired,
  isEditing: PropTypes.bool.isRequired,
  handleAddAddress: PropTypes.func.isRequired,
  buttonIsEnabled: PropTypes.bool.isRequired
};

export default GeoSuggest;
