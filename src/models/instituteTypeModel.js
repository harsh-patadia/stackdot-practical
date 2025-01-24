const mongoose = require('mongoose')

const instituteTypes = new mongoose.Schema({
    type_name: {
        type: String
    },
})

module.exports = mongoose.model('institutetypes', instituteTypes)