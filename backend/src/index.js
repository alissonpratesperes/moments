const express = require('express');
const mongoose = require('mongoose');

const app = express();

    mongoose.connect('mongodb+srv://omnistack_dev:KcAtSiNm0O@mavericks.pwlbv.mongodb.net/test', {
        useNewUrlParser: true
    });

        app.get('/', (request, response) => {
            return response.send('Hello World');
        });

        app.listen(3333);