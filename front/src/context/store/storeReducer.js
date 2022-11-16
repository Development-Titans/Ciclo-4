import {MOSTRAR_PRODUCTOS_USER} from '../../types/index'

const storeReducer = (state, action) => {
    switch (action.type) {
        case MOSTRAR_PRODUCTOS_USER:
            return {
                ...state,
                productos_store: action.payload
            }

        default:
            return state;
    }
}

export default storeReducer;