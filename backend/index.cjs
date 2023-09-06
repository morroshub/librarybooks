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

// Inicializaciones
const app = express();
require('./database');

// Settings
app.set('port', process.env.PORT || 3000);

// Configurar el almacenamiento de multer
const storage = multer.diskStorage({
    destination: path.join(__dirname, '../public/uploads'),
    filename(req, file, cb) {
        cb(null, new Date().getTime() + path.extname(file.originalname));
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


// Routes
app.use('/api/books/', require('./routes/books'));

// Middleware de manejo de errores
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Error interno del servidor' });
});

// Archivos estáticos - Declarando la carpeta public en el servidor
app.use(express.static(path.join(__dirname, '/public')));

// Iniciar servidor
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});
