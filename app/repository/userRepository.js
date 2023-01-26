const mongoose = require('mongoose');

const connection = mongoose.connection;

connection.once('open', async () => {
    const collection = connection.db.collection('0');
    collection.find({}).toArray( (err,data) => {
        //
    })
});
