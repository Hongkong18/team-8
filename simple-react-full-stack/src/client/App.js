import React from 'react';
import SelectSearch from 'react-select-search';
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
    render() {
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