const mongoose = require('mongoose')
// const validator = require('validator')

const Schema = mongoose.Schema

const categorySchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    products: []
})
const Category = mongoose.model('Category', categorySchema)

module.exports = Category