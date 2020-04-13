const mongoose = require('mongoose')
const MultipleChoice = mongoose.Schema({
                                    choices: String,
                                    correct: Number
                                })
module.exports = MultipleChoice