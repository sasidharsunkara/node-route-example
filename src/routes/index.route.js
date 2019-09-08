// JavaScript source code
var express = require('express');
const userRoutes = require('./user.route');
//const log4js = require('@log4js-node/log4js-api');
//const logger = log4js.getLogger('index.route');

const router = express.Router();

router.get('/health-check', (req, res) =>
    res.send('OK')
);

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now())
    next()
})

router.use('/user', userRoutes);

module.exports = router;
