const mongoose = require("mongoose")

const productSchema = mongoose.Schema({

    name: {
        type: String,
    },
    description: {
        type: String,
    },
    model: {
        type: String,
        default: ":)"
    },
    season: {
        type: String,
        default: 'InviErano'
    },
    price: {
        type: Number,
        default: 99999999
    },
    sizes: {
        type: Array,
        default: ['M']
    },
    image: {
        type: Array,
    },
    brand: {
        type: String,
        default: 'abidas'
    },
    category: {
        type: String,
        default: '+18'   
    },
    active: {
        type: Boolean,
        default: true
    }, 
}
);

module.exports = mongoose.model('Product', productSchema);