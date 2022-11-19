import React, {useReducer} from 'react';
import storeContext from './storeContext';
import storeReducer from './storeReducer';
import {MOSTRAR_PRODUCTOS_USER} from '../../types/index';
import clienteAxios from '../../config/axios';


const StoreState = props => {

    const initialState = {
        carrito_compras: [],
        productos_store: []
    }

    const [state, dispatch] = useReducer(storeReducer, initialState);

    const mostrarProductosStore = async () => {
        try {
            const mostrar = await clienteAxios.get('/api/productos');
            dispatch({
                type: MOSTRAR_PRODUCTOS_USER,
                payload: mostrar.data
            })
        } catch (error) {
            
        }
    }

    return(
        <storeContext.Provider
            value = {{
                productos_store: state.productos_store,
                carrito_compras: state.carrito_compras,
                mostrarProductosStore,
                //agregarCarritoCompras
            }}
        >
            {props.children}
        </storeContext.Provider>
    )

}

export default StoreState;
