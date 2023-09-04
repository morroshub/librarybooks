const { Router } = require('express');
const router = Router();

const Book = require('../models/book');

router.get('/', async (req, res) => {
    const books = await Book.find();
    res.json(books);
});

router.post('/', async (req, res) => {
    const { autor, titulo, isbn } = req.body; // Actualiza 'Cliente' a 'autor' y 'Servicio' a 'titulo'
    const newBook = new Book({ autor, titulo, isbn }); // Actualiza 'Cliente' a 'autor' y 'Servicio' a 'titulo'
    await newBook.save();
    res.json({ message: 'Post exitoso' });
});

router.delete('/:id', async (req, res) =>{
    const book = await Book.findByIdAndDelete()
    res.json({message:'libro eliminado'});   

})
module.exports = router;
