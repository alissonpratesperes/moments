const Moment = require('../models/Moment');

    module.exports = {
        async index(request, response) {

        },
        async store(request, response) {
            const { author, place, description, hashtags } = request.body;
            const { filename: image } = request.file;
            const moment = await Moment.create({
                author,
                place,
                description,
                hashtags,
                image
            });

                return response.json(moment);
        }
    };