const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const stockSchema = new Schema({
    ticker: {
        type: String
    },
 
    description: {
        type: String
    }
    
});




module.exports = mongoose.model('Stock', stockSchema);