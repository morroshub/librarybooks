const { Schema, model } = require('mongoose');

const BookSchema = new Schema({
    author: { type: String, required: true }, 
    title: { type: String, required: true }, 
    isbn: { type: String, required: true },
    ImatePath: { type: String }, 
    Created_at: { type: Date, default: Date.now }
});

module.exports = model('Book', BookSchema);