const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const app = express();
const dbUrl = require('./db');


// app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

MongoClient.connect(dbUrl.url, {useNewUrlParser: true } , (err, database) => {
    if (err) {
        return console.log(err)
    }

    const db = database.db("parent");

    require('./routes')(app, db);
});

module.exports = app;
