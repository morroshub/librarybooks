require('./styles/app.css');

const Bookservices = require('./services/Booksservices.cjs');

document.getElementById('book-form')
.addEventListener('submit', async (e) => {  // Capturamos el evento
    e.preventDefault();

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;
    const image = document.getElementById('image').files;

    const formData = new FormData();
    
    formData.append('image', image[0]);
    formData.append('title', title);
    formData.append('author', author);
    formData.append('isbn', isbn);

    const bookService = new Bookservices();

    try {
        const response = await bookService.postBook(formData);

        if (!response.ok) {
            throw new Error('Error en la solicitud');
        }

        const data = await response.json();
        // Procesar la respuesta exitosa aquí (por ejemplo, actualizar la interfaz de usuario)
    } catch (error) {
        console.error('Error al enviar la solicitud:', error);
        // Mostrar un mensaje de error en tu interfaz de usuario (por ejemplo, una alerta)
    }
});
