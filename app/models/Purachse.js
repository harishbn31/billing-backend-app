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
        default: Date.now()
    },
    dealer:{
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    invoice:{
        type: String,
        default: `Expo-${Date.now()}`
    },
    total: {
        type: Number,
        required: true
    },
    discount: {
        type: Number,
        required: true
    },
    tax: {
        type: Number,
        required: true
    },
    otherCharges: {
        type: Number,
        required: true
    },
    totalAmount: {
        type: Number,
        required: true
    },
    payMode: {
        type: String,
        enum: ['Net-Banking','Cash','UPI','Cheque'],
        required: true
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