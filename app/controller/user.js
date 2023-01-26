const express = require('express');
const router = express.Router();
const user = require('../models/user');
const mongoose = require("mongoose")

var options = {
    page: 1,
    limit: 10
}

router.get('/user', async (req,res) => {
    
    const email = req.param('email');

    const letter = email.charAt(0).toLowerCase();
    const collection = mongoose.connection.collection(letter);
    const documents = await collection.find({email: email}).toArray();
	res.set('Access-Control-Allow-Origin', '*')
    res.json(documents);

});

module.exports = router
