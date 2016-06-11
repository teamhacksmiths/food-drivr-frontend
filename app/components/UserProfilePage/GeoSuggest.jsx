import React from 'react';
import Geosuggest from 'react-geosuggest';

const Styles = {
  addressAlign: {
    textAlign: 'center',
    display: 'block',
    top: 38,
    zIndex: 1,
    color: '#000000'
  }
};

const GeoSuggest = (props) => (
  <div>
    <label style={Styles.addressAlign}>
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
