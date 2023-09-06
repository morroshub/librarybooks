/// Llamada al env para proteger el cod y la db; Desarrollo. 
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}


console.log(process.env.NODE_ENV);


/// Llamadas a dependencias
const express = require('express');
const morgan = require('morgan');
const multer = require('multer');
const path = require('path');
const cors = require('cors');




//Inicializaciones ;
const app = express();
require('./database');


// Settings; 
app.set('port', process.env.PORT || 3000); /// En caso de que la env no tenga PORT, usamos el PORT por defecto.


// Configurar el almacenamiento de multer

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, '../uploads'); // Aquí se configura la carpeta de destino
    },
    filename: (req, file, cb) => {
        cb(null, new Date().getTime() + '-' + file.originalname); // Aquí se configura el nombre del archivo
    }
});



// Configuración de CORS
app.use((req, res, next) => {
    // Permitir acceso desde cualquier origen (esto elimina CORS)
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.removeHeader('x-powered-by');
    // Establecer los métodos HTTP permitidos
    res.setHeader('Access-Control-Allow-Methods', 'POST');
    // Encabezados que los clientes pueden usar en sus solicitudes
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    // Permitir que la solicitud continúe y sea manejada por las rutas
    next();
});
  

app.use(multer({ storage }).single("image"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors())


// Routes 
app.use('/api/books/', require('./routes/books'));


// Middleware de manejo de errores
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Error interno del servidor' });
});


/// Static Files - Declarando la carpeta public en servidor.
app.use(express.static(path.join(__dirname, '/public')));


// Start Server;
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
})