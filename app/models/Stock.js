const mongoose = require('mongoose')

// const validator = require('validator')

const Schema = mongoose.Schema

const stockSchema = new Schema({
    products: []
})
const Stock = mongoose.model('Stock', stockSchema)

module.exports = Stock