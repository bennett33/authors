const mongoose = require('mongoose');
const AuthorSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required: [true, "First Name is required"],
        minlength: [3, "First Name must be at least 3 characters"]
    },  
    lastName:{
        type: String,
        required: [true, "Last Name is required"],
        minlength: [2, "Last Name must be at least 2 characters"]
    }
}, { timestamps: true });
module.exports.Author = mongoose.model('Author', AuthorSchema);

