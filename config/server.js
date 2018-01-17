require('marko/node-require'); // Allow Node.js to require and load `.marko` files

var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');
var markoExpress = require('marko/express');

var app = express();

app.use(markoExpress()); //enable res.marko(template, data)

app.use(express.static('./app/public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(expressValidator());

consign()
    .include('app/routes')
    .then('app/models')
    .then('app/controllers')
    .into(app);

module.exports = app;
