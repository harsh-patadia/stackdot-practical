const mongoose = require('mongoose')

const subjectModel = new mongoose.Schema({
    name: {
        type: String
    },
    allow_standards: {
        type: [Array]
    }
})

module.exports = mongoose.model('subjects', subjectModel)