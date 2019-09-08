// JavaScript source code
var express = require('express');
//  const log4js = require('./log4js');
const bodyParser = require('body-parser');
const routes = require('./routes/index.route');

var app = express();

var PORT = 3000;

app.use(bodyParser.json({ limit: '50mb' }));

//log4js.configure(app);

// API router
app.use('/api/v1/', routes);

app.listen(PORT, function () {
    console.log('Server is running on PORT:', PORT);
})