const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const app = express();


const port = 8000;

require('./app/routes')(app, {});

module.exports = function(app, db) {
  app.post('/notes', (req, res) => {

    res.send('Hello')
  });
};

app.listen(port, () => {
  console.log('We are live on ' + port);
});
