const Carrito = require('../models/CarritoCompras')
const Producto = require('../models/Productos')
const { validationResult } = require('express-validator');
const Ventas = require('../models/Ventas')

// ! Mostrando el carrito

exports.mostrarCarrito = async (req, res) => {
    try {
        // const shop = await Carrito.find({creador_Producto: req.usuario.id});
        const shop = await Carrito.find();
        res.send(shop)
        //res.json(shop);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un problema')
    }
}

// ! Agregando productos al carrito

exports.agregarCarrito = async (req, res) => {

    try {
        // ! Crear un nuevo proyecto
        // Revisar el ID
        let produc = await Producto.findById(req.params.id);
        console.log(produc)
        let c = await Carrito.findById(req.params.id);

        if (!c) {
            Carrito.create({
                _id: produc._id,
                nombre: produc.nombre,
                fecha_creado: produc.fecha_creado,
                precio: produc.precio,
                stock: produc.stock - 1,
                descripcion: produc.descripcion,
                urlImagen: produc.urlImagen,
                categoria: produc.categoria,
                cantidad: 1
            
            })    
            res.send('Se agrego un nuevo producto')
        }else{
            const actualizacion = {}
            actualizacion.cantidad = c.cantidad + 1
            actualizacion.stock = c.stock - 1

            c = await Carrito.findByIdAndUpdate({_id: req.params.id}, { $set: actualizacion}, {new: true})
            res.send('El producto ya esta en el carrito, se agrego cantidad')
        }
    } catch (error) {
        console.log(error)
        res.status(500).send('Producto no encontrado')
    }
}

// ! Eliminar producto del carrito

exports.eliminarProducto = async (req, res) => {

    try {
        // Revisar el ID
        let carri = await Carrito.findById(req.params.id);

        // Si el producto existe o no
        if (!carri) {
            return res.status(404).json({msg: 'Producto no encontrado'})
        }

        // Eliminar producto
        carri = await Carrito.findByIdAndRemove({_id: req.params.id})
        res.json({msg: 'Producto Eliminado'})
    } catch (error) {
        console.log(error);
        res.status(500).send('No se encontro el producto a eliminar')
    }

}

// ! Eliminar todos los productos del carrito

exports.eliminarProducCarrito = async (req, res) => {

    try {
        // Revisar el ID
        let carri = await Carrito.deleteMany({})
        res.json({msg: 'Se vacio el carrito'})

    } catch (error) {
        console.log(error);
        res.status(500).send('No se encontro el producto a eliminar')
    }

}

// ! Crear ventas en el carrito

exports.realizarVenta = async (req, res) => {
    try {
        // ! Crear una nueva venta
        // Revisar el ID
        let c = await Carrito.find();
        c.forEach(iterador => {
            Ventas.create({
                nombre: iterador.nombre,
                fecha_creado: iterador.fecha_creado,
                precio: iterador.precio,
                stock: iterador.stock,
                descripcion: iterador.descripcion,
                urlImagen: iterador.urlImagen,
                categoria: iterador.categoria,
                cantidad: iterador.cantidad
            })
        })   
        res.send('Se genero la venta')
        }catch(error) {
            console.log(error)
        }
}