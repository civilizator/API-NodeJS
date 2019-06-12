const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const app = express();
const db = require('./config/db');

const port = 8000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

MongoClient.connect(db.url, (err, database) => {
    if (err) {return console.log(err)}
    const db = database.db("hey");
    require('./app/routes')(app, db);
    app.listen(port, () => {
        console.log(`We are live on: ${port}`);
    });
});
