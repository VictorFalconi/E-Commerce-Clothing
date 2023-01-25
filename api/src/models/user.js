const mongoose = require("mongoose")

const userSchema = mongoose.Schema({

    username: {
        type: String,
    },
    email: {
        type: String,
        unique: true,
        require: true
    },
    name: {
        type: String,
    },
    image: {
        type: Array,
    },
    admin: {
        type: Boolean,
        default: false,
    },
    active: {
        type: Boolean,
        default: true,
    }

}
);

module.exports = mongoose.model('User', userSchema);