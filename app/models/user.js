const mongoose = require ('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

const UserScheme = new mongoose.Schema(   
{
    "_id": {
        type: String,
        select: false
    },
    email: {
        type: String
    },
    password: {
        type: String
    }
})

UserScheme.plugin(mongoosePaginate)
module.exports = mongoose.model('user', UserScheme)