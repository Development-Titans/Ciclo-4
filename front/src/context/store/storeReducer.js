import {MOSTRAR_PRODUCTOS_USER, AGREGAR_CARRITO} from '../../types/index'

const storeReducer = (state, action) => {
    switch (action.type) {
        case MOSTRAR_PRODUCTOS_USER:
            return {
                ...state,
                productos_store: action.payload
            }
        case AGREGAR_CARRITO:
            return {
                ...state,
                carrito_compras: [...state.carrito_compras, action.payload]
            }
        default:
            return state;
    }
}

export default storeReducer;