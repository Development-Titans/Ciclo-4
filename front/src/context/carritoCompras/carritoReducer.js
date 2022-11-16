import {MOSTRAR_PRODUCTOS_CARRITO, MOSTRAR_DATOS_CARRITO} from '../../types/index';

const carritoReducer = (state, action) => {
    switch (action.type) {
        case MOSTRAR_PRODUCTOS_CARRITO:
            return {
                ...state,
                carrito_compras: action.payload
            }
        case MOSTRAR_DATOS_CARRITO:
            return {
                ...state,
                datos_carrito: true
            }
        default:
            return state;
    }
}

export default carritoReducer;