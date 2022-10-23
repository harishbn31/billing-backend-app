const Bill = require('../models/Bill')
const Purchase = require('../models/Purachse')

const _ = require('lodash')

module.exports.getReports = (req, res) => {
    // console.log('check2222222',req.body)
    // Bill.find({'cretaedAt': {
    //     $gte: req.body.startDate,
    //     $lte:  req.body.endDate
    // }})
    Bill.find({createdAt: {
        $gte: req.body.startDate, 
        $lt: req.body.endDate
    }}).populate('customer').populate('products.product')
    .then(bills => {
        // Purchase.find()
        // .then(purchases => {
        //     // console.log(bills,purchases)
        //     res.status(200).send({bills: bills,purchases: purchases})
        // })
        res.json(bills)
    }).catch(err => res.json('no data'))
}