import React from 'react';
import Geosuggest from 'react-geosuggest';

const GeoSuggest = (props) => (
  <div className=".geosuggest__group">
    <Geosuggest
      placeholder="Start typing!"
      initialValue="Portland"
      location={new google.maps.LatLng(45.523062, -122.676482)}
      radius="20"
      enabled={!props.isEditing}
    />
    <span className="geosuggest__highlight"></span>
    <span className="geosuggest__bar"></span>
  </div>
);

export default GeoSuggest;
