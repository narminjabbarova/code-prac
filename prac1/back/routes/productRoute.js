const express = require('express')
const { getProducts, getProductById, deleteProduct, AddProduct } = require('../controllers/productController')
const route = express.Router()

route.get('/', getProducts)
route.get('/:id', getProductById)
route.delete('/:id', deleteProduct)
route.post('/', AddProduct)

module.exports = route