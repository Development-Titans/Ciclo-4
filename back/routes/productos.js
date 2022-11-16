// ! Rutas para crear, ver, actualizar y eliminar productos
const express = require('express');
const router = express.Router();
const productosController = require('../controllers/productoController')
const auth = require('../middleware/auth')
const { check } = require('express-validator');

// Crear productos
// api/productos
router.post('/',
    [
        // Valida el nombre
        check('nombre', 'El nombre es obligatorio').not().isEmpty(),
        // Va a revisar que el email tenga una @ y sea valido
        check('precio', 'El precio debe ser numerico').isNumeric(),
        check('precio', 'El precio es obligatorio').not().isEmpty(),
        check('stock', 'El stock debe ser numerico').isNumeric(),
        check('stock', 'El stock es obligatorio').not().isEmpty(),
        check('descripcion', 'La descripcion es obligatoria').not().isEmpty(),
        check('urlImagen', 'La urlImagen es obligatoria').not().isEmpty(),
        check('categoria', 'La categoria es obligatoria').not().isEmpty()
    ],
    // Primero va al auth a validar que si tenga el token y luego lo crea, esto para validar que si este logueado
    auth.verificar,
    auth.verificarAdmin,
    productosController.crearProducto
    
    
);

//! Ver todos los productos
router.get('/',
    // Primero va al auth a validar que si tenga el token y luego lo crea, esto para validar que si este logueado
    auth.verificar,
    auth.verificarAdmin,
    productosController.mostrarProductos
);

//! Actualizar producto
router.put('/:id',
[
    // Valida el nombre
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    // Va a revisar que el email tenga una @ y sea valido
    check('precio', 'El precio debe ser numerico').isNumeric(),
    check('precio', 'El precio es obligatorio').not().isEmpty(),
    check('stock', 'El stock debe ser numerico').isNumeric(),
    check('stock', 'El stock es obligatorio').not().isEmpty(),
    check('descripcion', 'La descripcion es obligatoria').not().isEmpty(),
    check('urlImagen', 'La urlImagen es obligatoria').not().isEmpty(),
    check('categoria', 'La categoria es obligatoria').not().isEmpty()
],
    // Primero va al auth a validar que si tenga el token y luego lo crea, esto para validar que si este logueado
    auth.verificar,
    auth.verificarAdmin,
    productosController.actualizarProducto
)

// ! Eliminar un producto
router.delete('/:id',

    // Primero va al auth a validar que si tenga el token y luego lo crea, esto para validar que si este logueado
    auth.verificar,
    auth.verificarAdmin,
    productosController.eliminarProducto
)

module.exports = router;