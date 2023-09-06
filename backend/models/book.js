const { Schema, model } = require('mongoose');

const BookSchema = new Schema({
    author: { type: String, required: true }, // Actualiza 'Cliente' a 'autor'
    titulo: { type: String, required: true }, // Actualiza 'Servicio' a 'titulo'
    isbn: { type: String, required: true },
    ImatePath: { type: String }, /// link del archivo desde la db
    Created_at: { type: Date, default: Date.now }
});

module.exports = model('Book', BookSchema);