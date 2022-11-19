// ! Rutas para autenticar usuarios
const express = require('express');
const router = express.Router();
// Validador de campos
const { check } = require('express-validator');
const authController = require('../controllers/authController')
const auths = require('../middleware/auth')

// Iniciar sesion
// api/auth
router.post('/',
    // traemos el metodo exportado desde el controlador de auth
    authController.autenticarUsuario
);

router.get('/',
    auths.verificar,
    authController.usuarioAutenticado
)

module.exports = router;
