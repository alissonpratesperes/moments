const mongoose = require('mongoose');
const MomentSchema = new mongoose.Schema({
    author: String,
    place: String,
    descrition: String,
    hashtags: String,
    image: String,
    likes: {
        type: Number,
        default: 0
    }
}, {
    timeStamps: true
});

    module.exports = mongoose.model('Moment', MomentSchema);