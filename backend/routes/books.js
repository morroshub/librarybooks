const { Router } = require('express');
const router = Router();
const Book = require('../models/book');


// Manejar errores con una función de utilidad
const handleError = (res, error) => {
    console.error('Error:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
};

router.get('/', async (req, res) => {
    try {
        const books = await Book.find();
        res.json(books);
    } catch (error) {
        handleError(res, error);
    }
});

router.post('/', async (req, res) => {
    const { title, author, isbn } = req.body;
    const imagePath = '../public/uploads/' + req.file.filename;
    
    try {
        const newBook = new Book({ title, author, isbn, imagePath });
        await newBook.save();
        res.json({ message: 'Post exitoso' });
    } catch (error) {
        handleError(res, error);
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
        handleError(res, error);
    }
});

module.exports = router;
