const express = require('express');
const mongoose = require('mongoose');
const app = express();

    mongoose.connect('mongodb+srv://omnistack_dev:KcAtSiNm0O@mavericks.pwlbv.mongodb.net/omnistack7', {
        useNewUrlParser: true
    });

        app.use(require('./routes'));
        app.listen(3333);