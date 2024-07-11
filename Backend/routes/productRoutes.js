// backend/routes/productRoutes.js
const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// GET all products
router.get('/products', productController.getAllProducts);

// GET a single product by ID
router.get('/products/:id', productController.getProductById);

module.exports = router;
