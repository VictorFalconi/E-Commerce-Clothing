const { Schema, model } = require('mongoose')

const productSchema = new Schema(
    {
        name: {
            type: String,
        },
        category: {
            type: Array,
        },
        price: {
            type: Number,
        },
        image: {
            type: Array,
        },
        size: {
            type: Array,
        },
        brand: {
            type: String,
        }
    }
)

const productModel = model('Product', productSchema)

module.exports = productModel;