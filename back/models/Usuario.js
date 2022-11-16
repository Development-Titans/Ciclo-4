const mongoose = require('mongoose');

// el trim elimina los espacios en blanco
// el unique es para no repetir correos
// en date ya se coloca un valor por default
const UsuariosSchema = mongoose.Schema({
    nombre: {
        type: String,
        require: true,
        trim: true
    },

    email: {
        type: String,
        require: true,
        trim: true,
        unique: true
    },

    password: {
        type: String,
        require: true,
        trim: true
    },

    registro: {
        type: Date,
        default: Date.now()
    },

    role: {
        type: String,
        default: 'usuario'
    }
});

module.exports = mongoose.model('Usuario', UsuariosSchema)