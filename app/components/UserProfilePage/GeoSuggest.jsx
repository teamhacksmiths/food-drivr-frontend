import React from 'react';
import Geosuggest from 'react-geosuggest';

const GeoSuggest = (props) => (
  <div>
    <label className="geosuggest__label">
      Address
      <Geosuggest
        placeholder="Start typing!"
        initialValue="Portland"
        onSuggestSelect={props.onSuggestSelect}
        location={new google.maps.LatLng(45.523062, -122.676482)}
        radius="20"
        disabled={!props.isEditing}
      />
      <span className="geosuggest__highlight"></span>
      <span className="geosuggest__bar"></span>
    </label>
  </div>
);

export default GeoSuggest;
