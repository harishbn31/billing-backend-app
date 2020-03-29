const mongoose = require('mongoose')

// const validator = require('validator')

const Schema = mongoose.Schema

const productSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description:{
        type: String,
        required: true
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category'
    },
    price: {
        type: Number,
        required: true,
        default: 0
    }
})
const Product = mongoose.model('Product', productSchema)

module.exports = Product