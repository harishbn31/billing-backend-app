const mongoose = require('mongoose')
const Stock = require('./Stock')
// const validator = require('validator')

const Schema = mongoose.Schema

const purchaseSchema = new Schema({
    products: [{
        product: {
            type: Schema.Types.ObjectId,
            ref: 'Product' 
        },
        stock: {
            type: Schema.Types.ObjectId,
            ref: 'Stock' 
        },
        quantity: {
            type: Number,
            default: 1
        },
        price: {
            type: Number,
            default: 1
        }
    }],
    date: {
        type: Date,
        required: true,
        default: Date.now
    },
    dealer:{
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    invoice:{
        type: String,
        required: true
    },
    total: {
        type: Number,
        required: true,
        default: 0
    },
    discount: {
        type: Number,
        required: true,
        default: 0
    },
    tax: {
        type: Number,
        required: true,
        default: 0
    },
    otherCharges: {
        type: Number,
        required: true,
        default: 0
    },
    totalAmount: {
        type: Number,
        required: true
    },
    payMode: {
        type: String,
        enum: ['Net-Banking','Cash','UPI','Cheque'],
        required: true,
        default: "Cash"
    },
    paymentDetails:{
        type: String
    }
})
// purchaseSchema.post('save', function(doc,next){
//     Purchase = this
//     Stock.find({ "_id": {$in: [Purchase.products]}}).then((products)=>{
//         products.map((product)=>{
//             product.quantity += 10
//         })
//     })
// })
const Purchase = mongoose.model('Purchase', purchaseSchema)

module.exports = Purchase