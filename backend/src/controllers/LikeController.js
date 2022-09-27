const Moment = require('../models/Moment');

    module.exports = {
        async store(request, response) {
            const moment = await Moment.findById(
                request.params.id
            );
                moment.likes += 1;
                    await moment.save();
                        request.io.emit(
                            'like',
                                moment
                        );
                            return response.json(
                                moment
                            );
        }
    };