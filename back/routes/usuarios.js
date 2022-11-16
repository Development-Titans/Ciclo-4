// ! Rutas para crear usuarios
const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController')
// Validador de campos
const { check } = require('express-validator');

// Crear un usuario
// api/usuarios
router.post('/',
    [
        // Valida el nombre
        check('nombre', 'El nombre es obligatorio').not().isEmpty(),
        // Va a revisar que el email tenga una @ y sea valido
        check('email', 'Agrega un email valido').isEmail(),
        check('password', 'La contraseña debe tener minimo de 8 caracteres').isLength({ min: 6})
    ],
    usuarioController.crearUsuario

);

module.exports = router;
