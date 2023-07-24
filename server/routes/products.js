const express = require('express')
const router = express.Router()
const Product = require('../model/product')

// router.get('',function(req, res){
//     // After (with Promise)
//     Product.find({})
//         .then(products => {
//         console.log(products);
//         })
//         .catch(err => {
//         console.error(err);
//     });
// })

router.get('', async function(req, res) {
    try {
        const foundProducts = await Product.find({})
        return res.json(foundProducts)
    } catch (err) {
        return res.status(500).send({errors: [{title: 'Database error', detail: 'Failed to retrieve products'}]})
    }
})

router.get('/:productId', async function(req, res) {
    const productId = req.params.productId
    try {
        const foundProduct = await Product.findById(productId)
        if (!foundProduct) {
            return res.status(422).send({errors: [{title: 'Product error', detail: 'Product not found'}]})
        }
        return res.json(foundProduct)
    } catch (err) {
        return res.status(500).send({errors: [{title: 'Database error', detail: 'Failed to retrieve product'}]})
    }
})

module.exports = router