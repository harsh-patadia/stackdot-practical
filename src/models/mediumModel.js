const mongoose = require('mongoose')

const medium = new mongoose.Schema({
    name: {
        type: String
    },
})

module.exports = mongoose.model('mediums', medium)