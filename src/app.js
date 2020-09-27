const express = require('express');
const bodyParser = require('body-parser');

// creo una app en express
const app = express();

// Cargo los archivos estaticos
app.use(express.static( __dirname + '/src/public' ));

// Añado carpeta de vistas y habilito Pug
app.set('views', './src/views');
app.set('view engine', 'pug');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//routes

app.use(require('./routes/google.routes'));

module.exports = app;