const Producto = require('../models/Productos')
const { validationResult } = require('express-validator');

// ! Crear un nuevo proyecto

exports.crearProducto = async (req, res) => {

    // Revisa si hay errores
    const errors = validationResult(req);
    // Si errores no esta vacio entonces {
    if (!errors.isEmpty()) {
        return res.status(400).json({errores: errors.array()});
    }

    try {
        // Crear un nuevo proyecto
        const producto = new Producto(req.body);

        // Guardar quien fue el creador del producto via JWT
        // producto.creador_Producto = req.usuario.id;

        // Guardamos el productos
        producto.save();
        res.json(producto)

    } catch (error) {
        console.log(error)
        res.status(500).send('Error del metodo post' + error)
    }
}

// ! Obtener todos los productos del usuario actual

exports.mostrarProductos = async (req, res) => {
    try {
        const productos = await Producto.find();
        res.json(productos);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un problema')
    }
}

// ! Actualizar productos

exports.actualizarProducto = async (req, res) => {

    // Revisa si hay errores
    const errors = validationResult(req);
    // Si errores no esta vacio entonces {
    if (!errors.isEmpty()) {
        return res.status(400).json({errores: errors.array()});
    }

    const {nombre, precio, stock, descripcion, urlImagen, categoria} = req.body;
    const nuevoProducto = {}
    // Actualizar datos por los nuevos
    if(nombre) {
        nuevoProducto.nombre = nombre
    }

    if(precio) {
        nuevoProducto.precio = precio
    }
    
    if(stock) {
        nuevoProducto.stock = stock
    }

    if(descripcion) {
        nuevoProducto.descripcion = descripcion
    }

    if(urlImagen) {
        nuevoProducto.urlImagen = urlImagen
    }

    if(categoria) {
        nuevoProducto.categoria = categoria
    }

    try {
        
        // Revisar el ID
        let produc = await Producto.findById(req.params.id);

        // Si el producto existe o no
        if (!produc) {
            return res.status(404).json({msg: 'Producto no encontrado'})
        }

        // Actualizar
        produc = await Producto.findByIdAndUpdate({_id: req.params.id}, { $set: nuevoProducto}, {new: true})

        res.json(produc)

    } catch (error) {
        console.log(error);
        res.status(500).send('Error en el servidor')
    }
}

// ! Eliminar producto

exports.eliminarProducto = async (req, res) => {

    try {
        // Revisar el ID
        let produc = await Producto.findById(req.params.id);

        // Si el producto existe o no
        if (!produc) {
            return res.status(404).json({msg: 'Producto no encontrado'})
        }

        // Eliminar producto
        produc = await Producto.findByIdAndRemove({_id: req.params.id})
        res.json({msg: 'Proyecto Eliminado'})
    } catch (error) {
        console.log(error);
        res.status(500).send('Error en el servidor')
    }

}