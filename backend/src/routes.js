const express = require('express');
const multer = require('multer');

const uploadConfig = require('./config/upload');
const MomentController = require('./controllers/MomentController');
const LikeController = require('./controllers/LikeController');

const routes = new express.Router();
const upload = multer(uploadConfig);

    routes.get('/moments', MomentController.index);
    routes.post('/moments', upload.single('image'), MomentController.store);
    routes.post('/moments/:id/like', LikeController.store);

        module.exports = routes;