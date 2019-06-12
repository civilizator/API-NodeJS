const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const app = express();
const dbUrl = require('./config/db');

const port = 8000;

// app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

MongoClient.connect(dbUrl.url, {useNewUrlParser: true } , (err, database) => {
    if (err) {
        return console.log(err)
    }

    const db = database.db("parent");

    require('./app/routes')(app, db);

    app.listen(port, () => {
        console.log(`We are live on: ${port}`);
    });
});
