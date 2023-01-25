const mongoose = require("mongoose")

const feedbackSchema = mongoose.Schema({

        userId: {
            type: String,
        },
        score: {
            type: Number,
        },
        comment: {
            type: String,
        },
    },
    {
        timestamp: true,
        versionKey: false,
    }
);

module.exports = mongoose.model('feedback', feedbackSchema);