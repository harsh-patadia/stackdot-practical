const mongoose = require('mongoose')

const institute = new mongoose.Schema({
    institute_type: {
        type: String
    },
    instituteType: {
        type: String
    },
    board: {
        type: String
    },
    medium: {
        type: String
    },
    classes: {
        type: String
    },
    standard: {
        type: String
    },
    subjects: {
        type: [Array]
    },

})

module.exports = mongoose.model('institutes', institute)