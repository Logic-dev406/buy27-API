const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        trim: true,
        required: true,
    },
    lastName: {
        type: String,
        trim: true,
        required: true,
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        required: true,
    },
    passwordHash: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    street: {
        type: String,
        default: '',
    },
    lga: {
        type: String,
        default: '',
    },
    direction: {
        type: String,
        default: '',
    },
    city: {
        type: String,
        default: '',
    },
    state: {
        type: String,
        default: '',
    },
});

userSchema.virtual('id').get(function () {
    return this._id.toHexString();
});

userSchema.set('toJSON', {
    virtuals: true,
});

const user = mongoose.model('User', userSchema);

module.exports = user;
