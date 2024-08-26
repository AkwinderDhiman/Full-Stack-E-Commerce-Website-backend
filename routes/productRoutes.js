const express = require('express');
const router = express.Router()
const Product = require('../models/productModel');


//add product
router.post('/addProduct', async (req, res) => {
    try {
        const productData = req.body;
        const product = new Product(productData);
        await product.save();
        res.status(201).json(product);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
})

//Image upload
router.post('/upload', async (req, res) => {
    try {
        const productData = req.body;
        const product = new Product(productData);
        await product.save();
        res.status(201).json(product);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
})

//add product
router.get('/product', async (req, res) => {
    try {
        // const productData = req.body;
        const product = await Product.find();  
        res.status(201).json(product);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
})
module.exports = router;