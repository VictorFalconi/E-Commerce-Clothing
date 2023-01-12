const mongoose = require('mongoose')

const categorySchema = mongoose.Schema({

    name: {
        type: String,
    },   
},{
    timestamp: true,
    versionKey: false
}
);

module.exports = mongoose.model('category', categorySchema)