const mongoose = require('mongoose')

const classModel = new mongoose.Schema({
    name: {
        type: String
    },
    classes: {
        type: [Array]
    },
    allow_medium: {
        type: [Array]
    }
})

module.exports = mongoose.model('classes', classModel)