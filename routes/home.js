const router = require('express').Router();
const AccountUserService = require('../services/accountUserService');

router.get('/', (req, res) => {
    const product = false
    res.status(200).render('index', { product })
})
router.use('/product', require('./products'))

const aus = (user) => new AccountUserService(user);

module.exports = router;