const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const Moment = require('../models/Moment');

    module.exports = {
        async index(request, response) {
            const moments = await Moment.find().sort('-createdAt');
                return response.json(
                    moments
                );
        },
        async store(request, response) {
            const {
                author,
                place,
                description,
                hashtags
            } = request.body;
            const {
                filename: image
            } = request.file;
            const [name ] = image.split('.');
            const fileName = `${name}.jpg`;
                await sharp(request.file.path).resize(500).jpeg({
                    quality: 100
                }).toFile(
                    path.resolve(
                        request.file.destination,
                            'resized',
                                fileName
                    )
                )
                    fs.unlinkSync(
                        request.file.path
                    );
            const moment = await Moment.create({
                author,
                place,
                description,
                hashtags,
                image: fileName
            });
                        request.io.emit(
                            'moment',
                                moment
                        );
                            return response.json(
                                moment
                            );
        }
    };