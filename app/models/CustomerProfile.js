const mongoose = require('mongoose')
const validator = require('validator')

const Schema = mongoose.Schema

const customerProfileSchema = new Schema({
    name:{
        type: String
    },
    email:{
        type: String
    },
    phone:{
        type: Number
    },
    address:{
        type: String
    },
    createdAt:{
        type: Date,
        default: Date.now
    },
},{timestamps: true})
const CustomerProfile = mongoose.model('CustomerProfile', customerProfileSchema)

module.exports = CustomerProfile