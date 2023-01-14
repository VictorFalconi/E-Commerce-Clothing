const mongoose = require("mongoose")

const buggySchema = mongoose.Schema(
    {
        userId: {
            type: String,
        },
        products: {
            type: Array,
        },
    },
    {
        timestamp: true,
        versionKey: false,
    }
)



module.exports = mongoose.model('buggy', buggySchema);

