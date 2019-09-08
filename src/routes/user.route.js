// JavaScript source code
var express = require('express');
const asyncHandler = require('express-async-handler');
const postmanApi = require('../backend/postman.api');


//const log4js = require('@log4js-node/log4js-api');
//const logger = log4js.getLogger('photographer-route');

const router = express.Router();

router.route('/msg')
    .get(asyncHandler(getMessage));

router.route('/backendCallTest')
    .put(asyncHandler(backendCall));

async function getMessage(req, res) {
    let message = {
        msg: 'Hello World'
    };
    return res.json(message);
}

async function backendCall(req, res) {
    return res.json(postmanApi.putRequest('Hello World'));
}


module.exports = router;
