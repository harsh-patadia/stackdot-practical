const mongoose = require('mongoose')

const boards = new mongoose.Schema({
    board_type: {
        type: String
    },
    allowed_institutetype: {
        type: [Array]
    }

})

module.exports = mongoose.model('boards', boards)