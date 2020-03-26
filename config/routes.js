const express = require('express')
const router = express.Router()

// middleware
const {authenticateUser} = require('../app/middlewares/authenticateUser')

// controllers
const usersController = require('../app/controllers/usersController')
const categoriesController = require('../app/controllers/categoriesController')
const productsController = require('../app/controllers/productsController')


router.get('/users', usersController.list)
router.post('/users/register', usersController.register)
router.post('/users/login', usersController.login)
router.put('/users/edit/:id',authenticateUser, usersController.update)
router.delete('/users/logout', authenticateUser, usersController.logout)
router.delete('/users/logout-all', authenticateUser, usersController.logoutAll)

router.get('/categories', categoriesController.list)
router.post('/categories', categoriesController.create)
router.put('/categories/edit/:id', categoriesController.update)
router.get('/categories/:id', categoriesController.show)
router.delete('/categories/:id', categoriesController.delete)

router.get('/products', productsController.list)
router.post('/products', productsController.create)
router.put('/products/edit/:id', productsController.update)
router.get('/products/:id', productsController.show)
router.delete('/products/:id', productsController.delete)



module.exports = router