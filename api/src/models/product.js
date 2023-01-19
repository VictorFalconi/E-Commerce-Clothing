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
    },
    season: {
        type: String,
    },
    price: {
        type: Number,
    },
    sizes: {
        type: Array,
    },
    image: {
        type: Array,
    },
    brand: {
        type: String,
    },
    category: {
        type: String,   
    },
    active: {
        type: Boolean,
        default: true
    },
    stock: {
        type: Object,
    }, 
}
);

module.exports = mongoose.model('Product', productSchema);