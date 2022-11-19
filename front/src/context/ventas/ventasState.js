import React, { useReducer } from 'react';
import ventasContext from './ventasContext';
import ventasReducer from './ventasReducer';
import {MOSTRAR_VENTAS} from '../../types';
import clienteAxios from '../../config/axios'

const Ventas = props => {

    const initialState = {
        ventas: []
    }

    // Crear dispatch y state
    const [state, dispatch] = useReducer(ventasReducer, initialState);

    // ! Mostrar ventas
    const mostrarVentas = async () => {
        try {
            const resul = await clienteAxios.get('/api/ventas');
            dispatch({
                type: MOSTRAR_VENTAS,
                payload: resul.data
            })
        } catch (error) {
            
        }
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