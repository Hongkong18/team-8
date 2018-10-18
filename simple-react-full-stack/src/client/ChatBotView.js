import ChatBot from 'react-simple-chatbot';
import React, { Component } from 'react';

const steps = [
    {
        id: '0',
        message: 'Welcome to react chatbot!',
        trigger: '1',
    },
    {
        id: '1',
        message: 'Bye!',
        end: true,
    },
];

class ChatBotView extends Component {
    render() {
        return(
        <div>
            <ChatBot steps={steps} />
        </div>
        )
    }
}

export default ChatBotView;
