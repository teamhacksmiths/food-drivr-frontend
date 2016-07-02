import React, { PropTypes } from 'react';
import Geosuggest from 'react-geosuggest';

const GeoSuggest = (props) => (
  <div className="geosuggest__wrapper">
    <label className="geosuggest__label">
      Address List
      <div className="geosuggest__input-wrapper">
        <Geosuggest
          placeholder="Start typing!"
          initialValue=""
          onSuggestSelect={props.onSuggestSelect}
          location={new google.maps.LatLng(45.523062, -122.676482)}
          radius="20"
          disabled={!props.isEditing}
        />
        <button className="btn button-add"></button>
      </div>
      <span className="geosuggest__highlight"></span>
      <span className="geosuggest__bar"></span>
    </label>
  </div>
);

Geosuggest.propTypes = {
  onSuggestSelect: PropTypes.func.isRequire
};

export default GeoSuggest;
