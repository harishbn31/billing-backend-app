const mongoose = require('mongoose')
const validator = require('validator')

const Schema = mongoose.Schema

const EmployeeProfileSchema = new Schema({
    empolyeeId: {
        type: String
    },
    address: {
        type: String
    },
    profile: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
})
const EmployeeProfile = mongoose.model('EmployeeProfile', EmployeeProfileSchema)

module.exports = EmployeeProfile