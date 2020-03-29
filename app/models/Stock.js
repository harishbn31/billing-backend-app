const mongoose = require('mongoose')

// const validator = require('validator')

const Schema = mongoose.Schema

const stockSchema = new Schema({
    products: [{
        product: {
            type: Schema.Types.ObjectId,
            ref: 'Product'
        },
        quantity: {
            type: Number,
            default: 1
        },
        stockPrice: {
            type: Number,
            default: 1
        }
    }]
})
const Stock = mongoose.model('Stock', stockSchema)

module.exports = Stock