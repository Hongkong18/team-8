import React from 'react';
// import ChatBot from '../lib/index';

class ChatBubble extends React.Component {
    render() {
        return(
            <div style={{"border":"1px solid", "border-radius":"5px", "padding":"5px", "margin": "10px", "width":"80%", "float": this.props.left === "true" ? "left": "right"}}>
                hi
            </div>
        )
    }
}

class ChatInput extends React.Component {
    render() {
        return(
            <div style={{"display":"inline"}}>
                <input style={{"border":"1px solid", "padding":"10px", "margin": "10px", "width": "75%"}} placeholder={"Text message"}>
                </input>
                <button style={{"border":"1px solid", "padding":"10px", "margin": "10px", "width": "10%"}}> SEND
                </button>
            </div>
        )

    }
}


export default class Chatbox extends React.Component{
    render(){
        return(
            <div style={{"border":"1px solid", "width":"40%", "height": "100px;"}}>
                <ChatBubble left="true"/>
                <ChatBubble left="false"/>
                <ChatInput/>
            </div>
        )
    }
}