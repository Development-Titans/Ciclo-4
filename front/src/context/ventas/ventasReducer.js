import {MOSTRAR_VENTAS} from '../../types/index'

const ventasAdmin = (state, action) => {
    switch (action.type) {
        case MOSTRAR_VENTAS:
            return {
                ...state,
                ventas: action.payload
            }
        default:
            return state;
    }
}

export default ventasAdmin;