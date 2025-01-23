const ProductModel = require('../models/productModel')

const getProducts = async(req,res)=>{
try {
    const products = await ProductModel.find()
    res.status(200).json(products)
} catch (error) {
    res.status(500).send({message: error.message})
}
}

const getProductById = async(req,res)=>{
    const id = req.params.id
try {
    const product = await ProductModel.findById(id)
    res.status(200).json(product)
} catch (error) {
    res.status(500).send({message: "error.message"})
}
}

const deleteProduct = async(req,res)=>{
    const id = req.params.id
try {
    const deletedProduct = await ProductModel.findByIdAndDelete(id)
    res.status(200).json({message:'deleted successfully'})
} catch (error) {
    res.status(500).send(
        {message: error.message})
}
}

const AddProduct = async(req,res)=>{
try {
    const newProduct = ProductModel({...req.body})
    await newProduct.save()
    res.status(200).json({message: 'added successfully',
        newProduct: newProduct
    })
} catch (error) {
    res.status(500).send({message: error.message})
}
}

module.exports = {getProducts, getProductById, deleteProduct, AddProduct}