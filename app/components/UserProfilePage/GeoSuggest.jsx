import React, { PropTypes } from 'react';
import Geosuggest from 'react-geosuggest';

const GeoSuggest = ({
  handleSuggestSelect,
  isEditing,
  handleAddAddress,
  buttonIsEnabled
}) => (
  <div className="geosuggest__wrapper">
    <label htmlFor="geosuggestInput" className="geosuggest__label">
      Address List
    </label>
    <div className="geosuggest__input-wrapper">
      <Geosuggest
        placeholder="Start typing to add an address to the list!"
        initialValue=""
        id="geosuggestInput"
        onSuggestSelect={handleSuggestSelect}
        location={new google.maps.LatLng(45.523062, -122.676482)}
        radius="20"
        disabled={!isEditing}
      />
      <button
        className={`btn button-add btn__geosuggest ${buttonIsEnabled ? '' : 'btn--disabled'}`}
        enabled={buttonIsEnabled}
        onClick={handleAddAddress}
      />
    </div>
    <span className="geosuggest__highlight"></span>
    <span className="geosuggest__bar"></span>
  </div>
);

GeoSuggest.propTypes = {
  handleSuggestSelect: PropTypes.func.isRequired,
  isEditing: PropTypes.bool.isRequired,
  handleAddAddress: PropTypes.func.isRequired,
  buttonIsEnabled: PropTypes.bool.isRequired
};

export default GeoSuggest;
