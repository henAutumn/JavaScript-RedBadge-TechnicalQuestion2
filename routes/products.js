const router = require('express').Router();
const db = require('../models').sequelize;
const Product = db.model('store_inventory');

router.get('/:productId', (req, res) => {
    const product = 'product/23'    
    Product.findOne({where: { id: 2}}).then(
        item => {
            console.log(item)
            res.status(200).render('index', {product: item})
        } 
    )
})

module.exports = router;
