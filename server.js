//import dependecies and DATA
const express = require('express');
const cors = require('cors');
const trek = require('./data.js');
const app = express();

//set CONST for root route
const hello = 'Hello World!';

//Don't recall exactly what this does outside of preventing a specific compile error
app.use(cors());

//GET root ROUTE
app.get('/', (req, res) => {
    res.json(hello);
})

//GET all characters from DATA
app.get('/trek-characters', (req, res) => {
    res.json(trek);

});

//GET single character using ID attibute
app.get('/trek-characters/:id', (req, res) => {
    const id = Number(req.params.id);
    const character = trek.find((singleCharacter) => singleCharacter.id === id);
    res.json(character);
})

//export to APP - though I'm not sure where APP is.
module.exports = app;