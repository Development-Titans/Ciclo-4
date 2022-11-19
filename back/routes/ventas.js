const express = require('express');
const router = express.Router();
const ventasController = require('../controllers/ventasController')
const auth = require('../middleware/auth')

// ! Ver ventas

router.get('/',
    /*auth.verificar,
    auth.verificarAdmin,*/
    ventasController.mostrarVentas
)

module.exports = router;