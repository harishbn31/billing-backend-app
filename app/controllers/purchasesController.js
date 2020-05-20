const Purachse = require('../models/Purachse')
const _ = require('lodash')

module.exports.list = (req, res) => {
    Purachse.find().populate('dealer').populate('products.product')
        .then(purachses => {
            res.json(purachses)
        })
}
module.exports.create = (req, res) => {
    const body = req.body
    const purachse = new Purachse(body) 
    purachse.save()
        .then(purachse => {
            res.json(purachse)
        }).catch(error=> res.send(error))
}
module.exports.show = (req, res) => {
    const id= req.params.id
    Purachse.findOne({"_id":id})
        .then(purachse => {
            res.json(purachse)
        }).catch(error=> res.send(error))
}
module.exports.update = (req, res) => {
    const id= req.params.id
    const body= req.body
    Purachse.findByIdAndUpdate(id,body,{new:true})
        .then(purachse => {
            res.json(purachse)
        }).catch(error=> res.send(error))
}
module.exports.delete = (req, res) => {
    const id = req.params.id
    Purachse.findOneAndDelete({"_id": id})
        .then(purachse => {
            res.json(purachse)
        })
        .catch(err => {
            res.json(err)
        })
}