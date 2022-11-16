const express = require('express');
const conectarDB = require('./config/db');


// Crear el Servidor
const app = express();

// Habilitar cors
const cors = require('cors');
app.use(cors())

// Conectar a la base de datos
conectarDB();

// Habilitar express.json
app.use(express.json({extended: true}))

// Puerto de la app
const PORT = process.env.PORT || 6000;

// Importar rutas
app.use('/api/usuarios', require('./routes/usuarios'))
app.use('/api/auth', require('./routes/auth'))
app.use('/api/productos', require('./routes/productos'))
app.use('/api/carrito', require('./routes/carritoCompras'))
app.use('/api/ventas', require('./routes/ventas'))

// Definir la pagina principal
app.get('/', (req, res) => {
    res.send('Hola Mundo')
});

// Arranca el app
app.listen(PORT, () => {
    console.log(`El servidor esta funcionando en el puerto ${PORT}`)
});