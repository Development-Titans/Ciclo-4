import React, {useReducer} from 'react';
import carritoContext from './carritoContext';
import carritoReducer from './carritoReducer';
import {MOSTRAR_PRODUCTOS_CARRITO, MOSTRAR_DATOS_CARRITO} from '../../types/index';
import clienteAxios from '../../config/axios';

const CarritoCompras = props => {

    // Inicializacion
    const initialState = {
        activar_carrito: false,
        carrito_compras: []
    }

    // Dispatch
    const [state, dispatch] = useReducer(carritoReducer, initialState);

    // Funciones

    // Mostrar datos en carrito
    const mostrarCarrito = async () => {
        try {
            const carri = await clienteAxios.get('/api/carrito');
            dispatch({
                type: MOSTRAR_PRODUCTOS_CARRITO,
                payload: carri.data
            })
        } catch (error) {
            console.log(error)
        }
    }
    // Activar si el carrito tiene datos
    const activarCarritoCompras = () => {
        dispatch({
            type: MOSTRAR_DATOS_CARRITO
        })
    }


    return(
        <carritoContext.Provider
            value = {{
                activar_carrito: state.activar_carrito,
                carrito_compras: state.carrito_compras,
                activarCarritoCompras,
                mostrarCarrito
            }}
        >
            {props.children}
        </carritoContext.Provider>
    )
}

export default CarritoCompras;