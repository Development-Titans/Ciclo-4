import React, { useReducer } from 'react';
import productoContext from './productoContext';
import productoReducer from './productoReducer';
import { BTN, AGREGAR_PRODUCTOS, MOSTRAR_PRODUCTOS, VALIDAR_NOMBRE_AGREGAR_PRODUCTO, VALIDAR_PRECIO_AGREGAR_PRODUCTO, VALIDAR_STOCK_AGREGAR_PRODUCTO, VALIDAR_DESCRIPCION_AGREGAR_PRODUCTO, VALIDAR_URL_IMAGEN_AGREGAR_PRODUCTO } from '../../types/index'
import clienteAxios from '../../config/axios'

const ProductoState = props => {

    /*const productos = [
        {id: 1, numero: '01', url: './Logo.png', parrafo: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic', nombre: 'Mouse'},
        {id: 2, numero: '02', url: './Logo.png', parrafo: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic', nombre: 'CPU'},
        {id: 3, numero: '03', url: './Logo.png', parrafo: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic', nombre: 'Teclado'}
    ]*/

    const initialState = {
        boton: false,
        productos: [],
        validar_nombre: false,
        validar_precio: false,
        validar_stock: false,
        validar_descripcion: false,
        validar_urlImagen: false
    }

    // Crear dispatch y state
    const [state, dispatch] = useReducer(productoReducer, initialState);

    // fUNCIONES

    // Mostrar boton cuando de clic
    const mostrarBoton = () => {
        dispatch({
            type: BTN
        })
    }

    // Agregar Productos
    const agregarProductos = async prod => {
        
        try {
            const resul = await clienteAxios.post('/api/productos', prod);
            console.log(resul)
        } catch (error) {
            console.log(error)
        }
    }



    // mostrar productos
    const mostrarProductos = async () => {
        try {
            const dat = await clienteAxios.get('/api/productos');
            dispatch({
                type: MOSTRAR_PRODUCTOS,
                payload: dat.data
            })
        } catch (error) {
            console.log(error)
        }
    }

    // Validar nombre
    const validarNombre = () => {
        dispatch({
            type: VALIDAR_NOMBRE_AGREGAR_PRODUCTO
        })
    }

    // Validar precio
    const validarPrecio = () => {
        dispatch({
            type: VALIDAR_PRECIO_AGREGAR_PRODUCTO
        })
    }

    // Validar stock
    const validarStock = () => {
        dispatch({
            type: VALIDAR_STOCK_AGREGAR_PRODUCTO
        })
    }

    // Validar descripcion
    const validarDescripcion = () => {
        dispatch({
            type: VALIDAR_DESCRIPCION_AGREGAR_PRODUCTO
        })
    }

    // Validar url
    const validarUrl = () => {
        dispatch({
            type: VALIDAR_URL_IMAGEN_AGREGAR_PRODUCTO
        })
    }

    return(
        <productoContext.Provider
            value = {{
                productos: state.productos,
                boton: state.boton,
                validar_nombre: state.validar_nombre,
                validar_precio: state.validar_precio,
                validar_stock: state.validar_stock,
                validar_descripcion: state.validar_descripcion,
                validar_urlImagen: state.validar_url_imagen,
                mostrarProductos,
                mostrarBoton,
                agregarProductos,
                validarNombre,
                validarPrecio,
                validarStock,
                validarDescripcion,
                validarUrl
            }}
        >
            {props.children}
        </productoContext.Provider>
    )
}

export default ProductoState;