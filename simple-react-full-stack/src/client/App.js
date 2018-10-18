import React from 'react';
import SelectSearch from 'react-select-search';
import {geolocated} from 'react-geolocated';
import './app.css';
// import ChatBot from '../lib/index';

const options = [
    {name: 'Swedish', value: 'sv'},
    {name: 'English', value: 'en'},
    {name: 'Spanish', value: 'es'},
    /*{
        type: 'group',
        name: 'Group name',
        items: [

        ]
    },*/
];

// class ChatBubble extends React.Component {
//     render() {
//         return(
//             <div style={{"display": "block"}}>
//                 <div style={{"border":"1px solid", "border-radius":"5px", "padding":"5px", "margin": "10px", "min-width":"50%", "max-width":"80%", "float": this.props.left === "true" ? "left": "right"}}
//
//                 </div>
//             </div>
//         )
//     }
// }
//
// class ChatInput extends React.Component {
//     render() {
//         return(
//             <div style={{"display":"inline"}}>
//                 <input style={{"border":"1px solid", "padding":"10px", "margin": "10px", "width": "78%"}} placeholder={"Text message"}>
//                 </input>
//                 <button style={{"border":"1px solid", "padding":"10px", "margin": "10px", "width": "10%"}}> SEND
//                 </button>
//             </div>
//         )
//
//     }
// }

export default class Chatbox extends React.Component{

    rad(x) {
        return x * Math.PI / 180;
      }
      
    getDistance (p1, p2) {
    var R = 6378137; // Earth’s mean radius in meter
    var dLat = rad(p2.lat - p1.lat);
    var dLong = rad(p2.lng - p1.lng);
    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(rad(p1.lat())) * Math.cos(rad(p2.lat)) *
        Math.sin(dLong / 2) * Math.sin(dLong / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c;
    return d; // returns the distance in meter
    }
    
    componentDidMount() {
        // if (!navigator.geolocation){
        //     this.setState({location: "N/A"})
            
        //   }else {
        
        //   function success(position) {
        //     var latitude  = position.coords.latitude;
        //     var longitude = position.coords.longitude;
        //     alert('<p>Latitude is ' + latitude + '° <br>Longitude is ' + longitude + '°</p>');
        //     this.setState({location: '<p>Latitude is ' + latitude + '° <br>Longitude is ' + longitude + '°</p>'});
        //   }
        
        //   function error() {
        //     alert("Unable to retrieve your location");
        //   }
        
        //   navigator.geolocation.getCurrentPosition(success, error);
        // }
    }
    render() {
    //     return !this.props.isGeolocationAvailable
    //   ? <div>Your browser does not support Geolocation</div>
    //   : !this.props.isGeolocationEnabled
    //     ? <div>Geolocation is not enabled</div>
    //     : this.props.coords
    //       ? <table>
    //         <tbody>
    //           <tr><td>latitude</td><td>{this.props.coords.latitude}</td></tr>
    //           <tr><td>longitude</td><td>{this.props.coords.longitude}</td></tr>
    //           <tr><td>altitude</td><td>{this.props.coords.altitude}</td></tr>
    //           <tr><td>heading</td><td>{this.props.coords.heading}</td></tr>
    //           <tr><td>speed</td><td>{this.props.coords.speed}</td></tr>
    //         </tbody>
    //       </table>
    //       : <div>Getting the location data&hellip; </div>;
         return(
            
            <div>
                
            {/*<div style={{"border":"1px solid", "width":"40%"}}>*/}
                <SelectSearch options={options} value="sv" name="language" placeholder="Choose your language" />
                {/*<SelectSearch value="sv" name="languages" placeholder="Search friends" value=""/>*/}
                {/*<ChatBubble left="true"/>*/}
                {/*<ChatBubble left="false"/>*/}
                {/*<ChatInput/>*/}
            </div>
        )
    }
}