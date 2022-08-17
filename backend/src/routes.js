const express = require('express');
const multer = require('multer');

const uploadConfig = require('./config/upload');
const MomentController = require('./controllers/MomentController');

const routes = new express.Router();
const upload = multer(uploadConfig);

    routes.get('/moments', MomentController.index);
    routes.post('/moments', upload.single('image'), MomentController.store);

        module.exports = routes;