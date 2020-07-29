import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker, Circle } from 'google-maps-react';
import redDot from './red-dot.png';
import orangeDot from './orange-dot.png';
import yellowDot from './yellow-dot.png';
import greenDot from './green-dot.png';
import './style.css';
import Data from './data.json';



const mapStyles = {
  width: '80%',
  height: '70%',
  left: '10%',
  right: '10%',
  border: 'solid',
  borderColor: '#54B948'
};



export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,  //Hides or the shows the infoWindow
    activeMarker: {},          //Shows the active marker upon click
    selectedPlace: {}          //Shows the infoWindow to the selected place upon a marker
  };

  onMarkerClick = (props, marker, e) =>
  this.setState({
    selectedPlace: props,
    activeMarker: marker,
    showingInfoWindow: true
  });

onClose = props => {
  if (this.state.showingInfoWindow) {
    this.setState({
      showingInfoWindow: false,
      activeMarker: null
    });
  }
};

  render() {

    return (
      <Map
        google={this.props.google}
        zoom={13}
        style={mapStyles}
        initialCenter={{
         lat: 56.4680,
         lng: -2.9707
        }}
      >
     {this.createMarkers()}
            
        </Map>
    );
  }

  createMarkers = () => {
    let table = []
    
    var json = require('./data.json');
    var jsonLength = Object.keys(json).length;


    for (let i = 0; i < jsonLength; i++) {

      if (json[i].queueLength == 0) {
        var queueCircleColour = "#32CD32";
        var queueDotColour = greenDot;
      }else if(json[i].queueLength <= 2){
        var queueCircleColour = "#FFFF00";
        var queueDotColour = yellowDot;
      }else if(json[i].queueLength <= 4){
        var queueCircleColour = "#FF4500";
        var queueDotColour = orangeDot;
      }else if(json[i].queueLength >= 5){
        var queueCircleColour = "#FF0000";
        var queueDotColour = redDot;
      }


      table.push( 
    
      <Marker
      onClick={this.onMarkerClick}
      name={'Queue: ' +json[i].queueLength + ', Capacity: '+json[i].currentCapacity+'/'+json[i].maxCapacity}
      label={json[i].storeName}
      position={{lat: json[i].latitude, lng: json[i].longitude}}
      icon={{
        url: queueDotColour,
      }}

    />

      )

      table.push(

        <InfoWindow
        marker={this.state.activeMarker}
        visible={this.state.showingInfoWindow}
        onClose={this.onClose}
      >
        <div>
          <h4>{this.state.selectedPlace.name}</h4>
        </div>
      </InfoWindow>


      )

      table.push(
        <Circle
        radius={40}
        center={{lat: json[i].latitude, lng: json[i].longitude}}
        strokeColor={queueCircleColour}
        strokeOpacity={0.8}
        strokeWeight={2}
        fillColor={queueCircleColour}
        fillOpacity={0.35}
         />

      )
    }
    return table
  }


}

export default GoogleApiWrapper({
  apiKey: 'ENTER API KEY'
})(MapContainer);

//export default App;
// export default GoogleApiWrapper({
//   apiKey: ("AIzaSyA8I792NpZFB3VDFHFiGlcm5YZ-SNb5kdA")
// })(App)
