const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const ProductSchema = new Schema({
  title: String,
  image: String,
  description: String,
  price: Number
});

const ProductModel = mongoose.model('Product', ProductSchema);

module.exports = ProductModel