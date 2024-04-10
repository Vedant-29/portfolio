const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name : {
        type: string,
        required: true,
    },
    email: {
        type: string,
        required: true,
    },
    password: {
        type: string,
        required: true,
    },
    role: {
        type: number,
        default: 0
    },
    cart: {
        type: Array,
        default: []
    },
}, {
    timestamps: true
})

module.exports = mongoose.model("Users", userSchema);