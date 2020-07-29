import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import './style.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './NCR_logo_without_background.png';
import redMarker from './redMarker.png';
import orangeMarker from './orangeMarker.png';
import yellowMarker from './yellowMarker.png';
import greenMarker from './greenMarker.png';
import Data from './data.json';

const logoStyle = {
  height: '50px',
  marginTop: '1%'
}

const markerImg = {
  height: '30px'
}

const markerNumbers = {
    display: 'inline',
    verticalAlign: 'middle',
    marginRight: '20px',
    fontSize: '25px'
}

ReactDOM.render(
  <React.StrictMode>
    <center><img style={logoStyle} src={logo} alt="Logo"/>
    <h2><b>Queue Detection</b></h2></center>
    <br></br>
    <center><img style={markerImg} src={greenMarker} alt="Green Marker"/> <p style={markerNumbers}>0</p>
    <img style={markerImg} src={yellowMarker} alt="Yellow Marker"/> <p style={markerNumbers}>1-2</p>
    <img style={markerImg} src={orangeMarker} alt="Orange Marker"/><p style={markerNumbers}>3-4</p>
    <img style={markerImg} src={redMarker} alt="Red Marker"/><p style={markerNumbers}>5+</p></center><br></br>

    <App/>


  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
