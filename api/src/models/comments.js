const mongoose = require('mongoose')

const commentsSchema = mongoose.Schema({

    name: {
        type: String,
    },
    email: {
        type: String,
    },
    message: {
        type: String
    }   
},{
    timestamp: true,
    versionKey: false
}
);

module.exports = mongoose.model('comments', commentsSchema)