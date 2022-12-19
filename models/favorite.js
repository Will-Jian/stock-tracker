const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const favoriteSchema = new Schema({
    userFrom: {
        type: Schema.Types.ObjectId,
        ref:"User"
    },
    tickerId: {
        type: String
    },
    

});



module.exports = mongoose.model('Favorite', favoriteSchema);