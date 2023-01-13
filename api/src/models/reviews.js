const mongoose = require("mongoose")

const reviewsSchema = mongoose.Schema({

        userId: {
            type: String,
        },
        score: {
            type: Number,
        },
        comment: {
            type: String,
        },
        productId: {
            type: String,
        }
    },
    {
        timestamp: true,
        versionKey: false,
    }
);

module.exports = mongoose.model('reviews', reviewsSchema);
