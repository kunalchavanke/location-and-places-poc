import React, { Component } from 'react';
import PlacesAutocomplete from './PlacesAutocomplete';
import GeoLocation from './GeoLocation';

class App extends Component {
  render() {
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '50vh' }}>
        <div>
          <h2>Location</h2>
          <div>
            <PlacesAutocomplete />
            <br />
            <GeoLocation />
          </div>
        </div>
      </div>
    );
  }
}
export default App;
