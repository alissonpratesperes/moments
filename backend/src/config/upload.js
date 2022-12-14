const multer = require('multer');
const path = require('path');

    module.exports = {
        storage: new multer.diskStorage({
            destination: path.resolve(
                __dirname,
                    '..', '..',
                        'uploads'
            ),
                filename: function(request, file, callback) {
                    callback(
                        null,
                            file.originalname
                    );
                }
        })
    };