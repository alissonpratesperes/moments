const Moment = require('../models/Moment');

    module.exports = {
        async store(request, response) {
            const moment = await Moment.findById(request.params.id);

                moment.likes += 1;

                    await moment.save();

                        return response.json(moment);
        }
    };