// import React, { useReducer } from 'react'
// import productoContext from './productoContext';
// import productoReducer from './productoReducer';
// import { FORMULARIO_PRODUCTOS, OBTENER_PRODUCTOS, OBTENER_VENTAS, AGREGAR_PRODUCTO, VALIDAR_FORMULARIO_CREAR_PRODUCTO_NOMBRE} from '../../types/index'
// import { v4 as uuidv4} from 'uuid';


// const ProductoState = props => {

//     const productos = [
//         {id: 1, numero: '01', url: './Logo.png', parrafo: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic', nombre: 'Mouse'},
//         {id: 2, numero: '02', url: './Logo.png', parrafo: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic', nombre: 'CPU'},
//         {id: 3, numero: '03', url: './Logo.png', parrafo: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic', nombre: 'Teclado'}
//     ]
    
//     const ventas = [
//         {id: 1, nombre: 'Mouse', categoria: 'Accesorios', precio: 25000, fecha: '28/07/2022'},
//         {id: 2, nombre: 'Teclado', categoria: 'Accesorios', precio: 20000, fecha: '28/07/2022'},
//         {id: 5, nombre: 'CPU', categoria: 'Ordenadores', precio: 350000, fecha: '28/07/2022'}
//     ]

//     const initialState = {
//         productos : [],
//         ventas : [],
//         lista_Productos: false,
//         error_formulario_crear_producto_nombre: false
//     }

//     // Dispatch para ejecutar las acciones
//     const [state, dispatch] = useReducer(productoReducer, initialState)

//     // Serie de funciones para el CRUD
//     const mostrarProductos = () => {
//         dispatch({
//             type: FORMULARIO_PRODUCTOS
//         })
//     }

//     // Obtener los productos 
//     const obtenerProductos = () => {
//         dispatch({
//             type: OBTENER_PRODUCTOS,
//             payload: productos
//         })
//     }

//         // Obtener las ventas 
//         const obtenerVentas = () => {
//             dispatch({
//                 type: OBTENER_VENTAS,
//                 payload: ventas
//             })
//         }

//         // Agregar nuevo producto
//         const agregarProducto = produc => {
//             produc.id = uuidv4();

//             // Insertar el producto en el state
//             dispatch({
//                 type: AGREGAR_PRODUCTO,
//                 payload: produc
//             })
//         }

//         // Valida el formulario por errores
//         const mostrarError = () => {
//             dispatch({
//                 type: VALIDAR_FORMULARIO_CREAR_PRODUCTO_NOMBRE
//             })
//         }

//     return(
//         <productoContext.Provider
//             value={{
//                 productos: state.productos,
//                 ventas: state.ventas,
//                 lista_Productos: state.lista_Productos,
//                 error_formulario_crear_producto_nombre: state.error_formulario_crear_producto_nombre,
//                 mostrarProductos,
//                 obtenerProductos,
//                 obtenerVentas,
//                 agregarProducto,
//                 mostrarError
//             }}
//         >
//             {props.children}
//         </productoContext.Provider>
//     )
// }

// export default ProductoState;

import React, { useReducer } from 'react';
import productoContext from './productoContext';
import productoReducer from './productoReducer';
import { BTN, AGREGAR_PRODUCTOS, MOSTRAR_PRODUCTOS, VALIDAR_NOMBRE_AGREGAR_PRODUCTO, VALIDAR_PRECIO_AGREGAR_PRODUCTO, VALIDAR_STOCK_AGREGAR_PRODUCTO, VALIDAR_DESCRIPCION_AGREGAR_PRODUCTO, VALIDAR_URL_IMAGEN_AGREGAR_PRODUCTO } from '../../types/index'

const ProductoState = props => {

    const productos = [
        {id: 1, numero: '01', url: './Logo.png', parrafo: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic', nombre: 'Mouse'},
        {id: 2, numero: '02', url: './Logo.png', parrafo: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic', nombre: 'CPU'},
        {id: 3, numero: '03', url: './Logo.png', parrafo: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic', nombre: 'Teclado'}
    ]

    const initialState = {
        boton: false,
        productos: [],
        validar_nombre: false,
        validar_precio: false,
        validar_stock: false,
        validar_descripcion: false,
        validar_url_imagen: false
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
    const agregarProductos = prod => {
        dispatch({
            type: AGREGAR_PRODUCTOS,
            payload: prod
        })
    }

    // mostrar productos
    const mostrarProductos = () => {
        dispatch({
            type: MOSTRAR_PRODUCTOS,
            payload: productos
        })
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
                validar_url_imagen: state.validar_url_imagen,
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