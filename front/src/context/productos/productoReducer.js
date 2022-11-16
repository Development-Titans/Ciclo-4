import { BTN, AGREGAR_PRODUCTOS, MOSTRAR_PRODUCTOS, VALIDAR_NOMBRE_AGREGAR_PRODUCTO, VALIDAR_PRECIO_AGREGAR_PRODUCTO, VALIDAR_STOCK_AGREGAR_PRODUCTO, VALIDAR_DESCRIPCION_AGREGAR_PRODUCTO, VALIDAR_URL_IMAGEN_AGREGAR_PRODUCTO } from '../../types/index'

// Actualizar cada state
const reduxi = (state, action) => {
    // Segun el caso va hacer algo
    switch (action.type) {
        case BTN:
            return {
                ...state,
                boton: true
            }
        case MOSTRAR_PRODUCTOS:
            return {
                ...state,
                productos: action.payload
            }
        case AGREGAR_PRODUCTOS:
            return {
                ...state,
                productos: [...state.productos, action.payload]
            }
        case VALIDAR_NOMBRE_AGREGAR_PRODUCTO:
            return {
                ...state,
                validar_nombre: true
            }
        case VALIDAR_PRECIO_AGREGAR_PRODUCTO:
            return {
                ...state,
                validar_precio: true
            }
        case VALIDAR_STOCK_AGREGAR_PRODUCTO:
            return {
                ...state,
                validar_stock: true
            }
        case VALIDAR_DESCRIPCION_AGREGAR_PRODUCTO:
            return {
                ...state,
                validar_descripcion: true
            }
        case VALIDAR_URL_IMAGEN_AGREGAR_PRODUCTO:
            return {
                ...state,
                validar_url_imagen: true
            }
        default:
            return state;
}
}
export default reduxi;