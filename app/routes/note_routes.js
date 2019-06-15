module.exports = function (app, db) {
    app.post('/notes', (req, res) => {
        // console.log(req.body);
        // res.send('Hello');
        const note = {
            text: req.body.body,
            title: req.body.title,
            names: req.body.names
        };

        db.collection('notes').insertOne(note, (err, result) => {
            if (err) {
                res.send({'error': 'An error has occurred'})
            } else {
                res.send(result.ops[0])
            }
        });
    });
};


