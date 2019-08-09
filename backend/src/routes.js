const express = require('express');
const DevController = require('./controllers/DevController');

const routes = express.Router();

routes.get('/', (req, res) => {
    const name = req.query.name || 'Fulano';
    return res.json({ message: `Hello ${name}!` });
});

routes.post('/devs', DevController.store);

module.exports = routes;
