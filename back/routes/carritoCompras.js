const express = require('express');
const router = express.Router();
const carritoController = require('../controllers/carritoController')
const auth = require('../middleware/auth')

// ! Ver productos en carrito

router.get('/',
    auth.verificar,
    carritoController.mostrarCarrito
)

// ! Agregar producto al carrito

router.put('/:id',

    auth.verificar,
    carritoController.agregarCarrito
)

// ! Borrar un solo producto del carrito

router.delete('/:id',

    auth.verificar,
    carritoController.eliminarProducto
)

// ! Borrar todos los productos del carrito

router.delete('/',

    auth.verificar,
    carritoController.eliminarProducCarrito
)

module.exports = router;