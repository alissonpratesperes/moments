const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');

const app = express();
const server = require('http').Server(app);
const options = {
    cors: true,
        origins: ['*:*']
};
const io = require('socket.io')(
    server,
        options
);

    mongoose.connect('mongodb+srv://omnistack_dev:KcAtSiNm0O@mavericks.pwlbv.mongodb.net/omnistack7', {
        useNewUrlParser: true
    });

        app.use((request, response, next) => { 
            request.io = io;
            next();
        });
        app.use(cors());
        app.use(
            '/files',
                express.static(
                    path.resolve(
                        __dirname,
                            '..',
                                'uploads',
                                    'resized'
                    )
                )
        );
        app.use(
            require(
                './routes'
            )
        );

            server.listen(
                3333
            );