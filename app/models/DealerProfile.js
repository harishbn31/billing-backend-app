const mongoose = require('mongoose')
const validator = require('validator')

const Schema = mongoose.Schema

const DealerProfileSchema = new Schema({
    gstn: {
        type: String
    },
    profile: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
})
const DealerProfile = mongoose.model('DealerProfile', DealerProfileSchema)

module.exports = DealerProfile