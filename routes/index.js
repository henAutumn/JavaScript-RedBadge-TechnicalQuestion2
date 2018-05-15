module.exports = (app) => {
    app.use('/', require('./home'))
    app.use('/api/auth', require('./accoutUser'));
    app.use('/api/purchase', require('./memberPurchase'));
}   