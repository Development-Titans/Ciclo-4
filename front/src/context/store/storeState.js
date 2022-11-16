import React, {useReducer} from 'react';
import storeContext from './storeContext';
import storeReducer from './storeReducer';
import {MOSTRAR_PRODUCTOS_USER} from '../../types/index';


const StoreState = props => {

    const tienda = [
        {id: 54, url_imagen: './Logo.png', nombre: 'Mouse', precio: 25000},
        {id: 62, url_imagen: './Logo.png', nombre: 'Teclado', precio: 45000},
        {id: 41, url_imagen: './Logo.png', nombre: 'CPU', precio: 350000}
    ]

    const initialState = {
        productos_store: []
    }

    const [state, dispatch] = useReducer(storeReducer, initialState);

    const mostrarProductosStore = () => {
        dispatch({
            type: MOSTRAR_PRODUCTOS_USER,
            payload: tienda
        })
    }

    return(
        <storeContext.Provider
            value = {{
                productos_store: state.productos_store,
                mostrarProductosStore
            }}
        >
            {props.children}
        </storeContext.Provider>
    )
}

export default StoreState;
