const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const server = express();

mongoose.connect('mongodb://omnistack:omnistack-8@ds261277.mlab.com:61277/omnistack-8', {
    useNewUrlParser: true
});

server.use(express.json());
server.use(routes);
server.listen(3333);
