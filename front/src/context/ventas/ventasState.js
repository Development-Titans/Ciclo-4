import React, { useReducer } from 'react';
import ventasContext from './ventasContext';
import ventasReducer from './ventasReducer';
import {MOSTRAR_VENTAS} from '../../types';


const Ventas = props => {

    const venticas = [
        {
            id: 54, nombre: 'Mouse', categoria: 'Accesorios', precio: 20000, fecha: '24/02/2021'
        }
    ]

    const initialState = {
        ventas: []
    }

    // Crear dispatch y state
    const [state, dispatch] = useReducer(ventasReducer, initialState);

    // ! Mostrar ventas
    const mostrarVentas = () => {
        dispatch({
            type: MOSTRAR_VENTAS,
            payload: venticas
        })
    }


    return(
        <ventasContext.Provider
            value = {{
                ventas: state.ventas,
                mostrarVentas
            }}
        >
            {props.children}
        </ventasContext.Provider>
    )
}

export default Ventas;