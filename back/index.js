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

//Inicializaciones ;
const app = express();
require('./database');

// Settings; 
app.set('port', process.env.PORT || 3000); /// En caso de que la env no tenga PORT, usamos el PORT por defecto.

// Middelware;
app.use(morgan('dev'));
const storage = multer.diskStorage({
    destination: path.join(__dirname,'public/uploads'),
    filename(req, file, cb){
        cb(null, new Date().getTime() + path.extname(file.originalname));
    }
})
app.use(multer({ storage }).single('image'));
app.use(express.urlencoded({extended: false})); 
app.use(express.json());

// Routes 
app.use('/api/books/', require('./routes/books'));

/// Static Files - Declarando la carpeta public en servidor.
app.use(express.static(path.join(__dirname, 'public/uploads')));

// Start Server;
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
})