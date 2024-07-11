
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  company: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  rating: { type: Number, required: true },
  discount: { type: Number, required: true },
  availability: { type: Boolean, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
