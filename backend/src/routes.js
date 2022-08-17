const express = require('express');
const routes = new express.Router();

    routes.get('/', (request, response) => {
        return response.send('Hello World');
    });

        module.exports = routes;