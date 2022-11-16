// ! Rutas para autenticar usuarios
const express = require('express');
const router = express.Router();
// Validador de campos
const { check } = require('express-validator');
const auth = require('../controllers/authController')

// Crear un usuario
// api/usuarios
router.post('/',
    [
        // Va a revisar que el email tenga una @ y sea valido
        check('email', 'Agrega un email valido').isEmail(),
        check('password', 'La contraseña debe tener minimo de 8 caracteres').isLength({ min: 6})
    ],
    // traemos el metodo exportado desde el controlador de auth
    auth.autenticarUsuario
);

module.exports = router;
