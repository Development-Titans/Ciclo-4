import React, {useReducer} from 'react';
import carritoContext from './carritoContext';
import carritoReducer from './carritoReducer';
import {MOSTRAR_PRODUCTOS_CARRITO, MOSTRAR_DATOS_CARRITO} from '../../types/index';

const CarritoCompras = props => {

    const carrito = [
        {
            id: 32, nombre: 'Mouse', precio: 25000, url_imagen: './Logo.png', cantidad: 5
        }
    ]

    // Inicializacion
    const initialState = {
        carrito_compras: [],
        datos_carrito: false
    }

    // Dispatch
    const [state, dispatch] = useReducer(carritoReducer, initialState);

    // Funciones

    const mostrarCarrito = () => {
        dispatch({
            type: MOSTRAR_PRODUCTOS_CARRITO,
            payload: carrito
        })
    }

    const mostrarDatos = () => {
        dispatch({
            type: MOSTRAR_DATOS_CARRITO
        })
    }


    return(
        <carritoContext.Provider
            value = {{
                carrito_compras: state.carrito_compras,
                datos_carrito: state.datos_carrito,
                mostrarCarrito,
                mostrarDatos
            }}
        >
            {props.children}
        </carritoContext.Provider>
    )
}

export default CarritoCompras;