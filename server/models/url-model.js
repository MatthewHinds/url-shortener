const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Url = new Schema(
    {
        url: { type: String, required: true },
        shortUrl: {type: String, required: true },
        expirationDate: { type: String, required: true}
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('url', Url);