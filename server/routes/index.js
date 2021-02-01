
const express = require('express')
const app = express();

app.use( require('./pokemon.js') )
app.use( require('./imagenes.js') )

module.exports = app;