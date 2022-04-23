const mongoose = require('mongoose');
const { Schema } = mongoose;

const NotesSchema = new Schema({
    name : {
        type : String,
        required : true
    },
    description : {
        type : String,
    },
    tag : {
        type : String,
        default : 'General'
    }
});

module.exports = mongoose.model('notes',NotesSchema);