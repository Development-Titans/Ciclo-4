const mongoose = require('mongoose');

// el trim elimina los espacios en blanco
// el unique es para no repetir correos
// en date ya se coloca un valor por default
const CarritoSchema = mongoose.Schema({

    nombre: {
        //tipo de dato
        type: String,
        // si debe ser obligatorio darlo o no
        require: true
    },
    fecha_creado: {
        type: Date,
        default: Date.now()
    },
    precio: {
        type: Number,
        require: true
    },
    stock: {
        type: Number,
        require: true
    },
    descripcion: {
        type: String,
        require: true
    },
    urlImagen: {
        type: String,
        require: true
    },
    categoria: {
        type: String,
        require: true
    },
    cantidad: {
        type: Number,
        require: false
    },
    creador_Producto: {
        // vamos a atrapar el dato de la persona que va a crear el producto, este dato lo cogemos de la base de datos
        type: mongoose.Schema.Types.ObjectId,
        // cogemos el nombre que le dimos a la ultima linea del modelo usuario, de ahi va a sacar el id de referencia, es una relacion
        ref: 'Usuario'
    }
});

module.exports = mongoose.model('Carrito de Compras', CarritoSchema)