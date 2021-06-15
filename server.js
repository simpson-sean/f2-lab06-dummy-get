const express = require('express');
const trek = require('./data.js');
const cors = require('cors');
const app = express();

const hello = 'Hello World!';

app.use(cors());

app.get('/', (req, res) => {
    res.json(hello);
})

app.get('/trek-characters', (req, res) => {
    res.json(trek);

});

app.get('/trek-characters/:id', (req, res) => {
    const id = Number(req.params.id);

    const character = trek.find((singleCharacter) => singleCharacter.id === id);

    res.json(character);
})

module.exports = app;