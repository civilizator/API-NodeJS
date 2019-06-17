let ObjectID = require('mongodb').ObjectID;

module.exports = function (app, db) {
    app.get('/notes/:id', (req, res) => {
        const id = req.params.id;
        const details = {'_id': new ObjectID(id)};
        db.collection('notes').findOne(details, (err, item) => {
            if (err) {
                res.send({'error': 'An error has occurred'});
            } else {
                res.send(item);
            }
        })
    });

    app.post('/notes', (req, res) => {
        // console.log(req.body); //printout in console - terminal
        // res.send('Hello');
        const note = {
            texts: req.body.body,
            titles: req.body.title,
            names: req.body.name
        };

        db.collection('notes').insertOne(note, (err, result) => {
            if (err) {
                res.send({'error': 'An error has occurred'});
            } else {
                res.send(result.ops[0]);
            }
        });
    });
};


