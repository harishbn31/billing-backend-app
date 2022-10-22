const Bill = require('../models/Bill')
const Purchase = require('../models/Purachse')

const _ = require('lodash')

module.exports.list = (req, res) => {
    console.log(req.query)
    Bill.find({"createdAt": {"$gte": new Date(req.query.date), "$lt": Date.now()}}).populate('customer')
    .then(bills => {
        Purchase.find().populate('dealer')
        .then(purchases => {
            // console.log(bills,purchases)
            res.status(200).send({bills: bills,purchases: purchases})
        })
    })
}