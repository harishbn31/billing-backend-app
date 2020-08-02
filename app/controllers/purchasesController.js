const Purchase = require('../models/Purachse')
const Product = require('../models/Product')
const Stock = require('../models/Stock')
const _ = require('lodash')
const { findOne } = require('../models/Stock')
const { all } = require('../../config/routes')

module.exports.list = (req, res) => {
    Purchase.find().populate('dealer').populate('products.product')
        .then(purchases => {
            res.json(purchases)
        })
}
module.exports.create = (req, res) => {
    const body = req.body
    console.log(body.products)
    let productsPack = []
    body.products.map(item => {
        Product.findOne({_id: item.product})
            .then((product) => {
                if(product){
                    console.log(item)
                    productsPack.concat(item)
                }
                else{
                    let newProductId, newStockId
                    let newProduct = {
                        name: item.name,
                        category: item.category,
                        price: item.price
                    }
                    const product = new Product(newProduct)
                    product.save()
                        .then(listedProduct => {
                            newProductId=listedProduct._id
                        }).catch(err => res.json(err))

                    let newStock = {
                        product: item.product,
                        quantity: item.quantity,
                        stockPrice: item.price
                    }
                    const stock = new Stock(newStock)
                    stock.save()
                        .then(listedStock => {
                            newStockId=listedStock._id
                        }).catch(err => res.json(err))

                    productsPack.concat({
                        product: newProductId,
                        stock: newStockId,
                        stockPrice: item.price,
                        quantity: item.quantity,
                        name: item.name
                    })
                }
            })
    })
    console.log(productsPack,'----->productsPack')
    // const purchase = new Purchase(body)
    // purchase.save()
    //     .then(purchase => {
    //         res.json(purchase)
    //     }).catch(error=> res.send(error))
}
module.exports.show = (req, res) => {
    const id= req.params.id
    Purchase.findOne({"_id":id})
        .then(purchase => {
            res.json(purchase)
        }).catch(error=> res.send(error))
}
module.exports.update = (req, res) => {
    const id= req.params.id
    const body= req.body
    Purchase.findByIdAndUpdate(id,body,{new:true})
        .then(purchase => {
            res.json(purchase)
        }).catch(error=> res.send(error))
}
module.exports.delete = (req, res) => {
    const id = req.params.id
    Purchase.findOneAndDelete({"_id": id})
        .then(purchase => {
            res.json(purchase)
        })
        .catch(err => {
            res.json(err)
        })
}