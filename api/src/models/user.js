const mongoose = require("mongoose")

const userSchema = mongoose.Schema({

    full_name: {
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
    last_name: {
        type: String,
    },
    image: {
        type: String,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    }

}
);

module.exports = mongoose.model('User', userSchema);