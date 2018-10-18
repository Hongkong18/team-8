import React from 'react';
import { ThemeProvider } from 'styled-components';
import ChatBot from '../../lib/index';

const otherFontTheme = {
  background: '#f5f8fa',
  fontFamily: 'Helvetica Neue',
  headerBgColor: '#6e48aa',
  headerFontColor: '#fff',
  headerFontSize: '16px',
  botBubbleColor: '#6E48AA',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
};

const ThemedExample = () => (
  <ThemeProvider theme={otherFontTheme}>
    <ChatBot botAvatar={'mindhk.png'} botDelay={'100'} headerTitle={'Mind HK Chatbot'}
      steps={[
        {
          id: '1',
          message: 'How do you feel today?',
          trigger: '2',
        },
        {
          id: '2',
          user: true,
          trigger: '3',
        },
        {
          id: '3',
          message: ({ previousValue, steps }) => 'Oh, you feel ' + previousValue.split(" ").splice(-1)[0] + '.. What happened?',
          trigger: ({ value, steps }) => '4',
        },
        {
          id: '4',
          user: true,
          trigger: '5',
        },
        {
          id: '5',
          message: "Don't hesitate to get from others. Here is a list of doctors that you can find near by.",
          // message: 'Here is a list of doctors that you can find near by.',
          trigger: '6',
        },
        {
          id: '6',
          component: (
            <div>
              <p href=""><strong>Dr. AU MING KAI</strong> Room 1509, 15/F 655 Nathan Road, Kowloon TEL: 27879372</p>
              <p href=""><strong>Dr. CHAN SAI YIN</strong> Room 803A Champion Building 301-309, Nathan Road, Kowloon TEL: 7808520</p>
              <p href=""><strong>Dr. FU Chi-kin</strong> Room 1713, HK Pacific Centre 28 Hankow Road,Tsim Sha Tsui, Kowloon TEL: 35863863</p>
            </div>
          ),
          // message: 'Here is a list of doctors that you can find near by.',
          end: true,
        },
      ]}
    />
  </ThemeProvider>
);

export default ThemedExample;
