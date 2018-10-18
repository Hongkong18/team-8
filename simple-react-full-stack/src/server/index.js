const express = require('express');
const os = require('os');

// const db = require('./db')

const searchbarHandler = require('./searchbarHandler')
const chatbotHandler = require('./chatbotHandler')

const app = express();

app.use(express.static('dist'));
app.get('/api/getUsername', (req, res) => res.send({ username: os.userInfo().username }));

app.get('/api/search', (req, res) =>  searchbarHandler.handleSearchbar(req, res));

app.get('/api/chatbot', (req, res) =>  chatbotHandler.handleFeedback(req, res));



app.listen(8080, () => console.log('Listening on port 8080!'));



