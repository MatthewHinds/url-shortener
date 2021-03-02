require('dotenv').config();

const mongoose = require('mongoose');
const uri = process.env.DB;

mongoose
    .connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .catch(e => {
        console.log(`Connection error`, e.message);
    });

const db = mongoose.connection;

module.exports = db;