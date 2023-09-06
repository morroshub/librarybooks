const { Router } = require('express');
const router = Router();

const Book = require('../models/book');

router.get('/', async (req, res) => {
    try {
        const books = await Book.find();
        res.json(books);
    } catch (error) {
        console.error('Error al obtener libros:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
});


router.post('/', async (req, res) => {
    const { author, title, isbn } = req.body;
    const imagePath = '/uploads/' + req.file.filename;
    
    try {
        const newBook = new Book({ author, title, isbn, imagePath });
        await newBook.save();
        res.json({ message: 'Post exitoso' });
    } catch (error) {
        console.error('Error al guardar el libro:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const book = await Book.findByIdAndDelete(req.params.id);
        if (!book) {
            res.status(404).json({ error: 'Libro no encontrado' });
        } else {
            res.json({ message: 'Libro eliminado' });
        }
    } catch (error) {
        console.error('Error al eliminar el libro:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
});

module.exports = router;
