const express = require('express');

const server = express();

server.get('/', (req, res) => {
    const name = req.query.name || 'Fulano';
    return res.json({ message: `Hello ${name}!` });
});

server.listen(3333);
