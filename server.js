const express = require('express');
const app = express();
const port = 7826;
const cors = require('cors')

app.use(cors());

app.get('/', (req, res) => {
    res.json('Hello World!');

})

module.exports = app;