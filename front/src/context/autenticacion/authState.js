import {REGISTRO_EXITOSO, REGISTRO_ERROR, LOGIN_ERROR, MOSTRAR_USUARIO, LOGIN_EXITOSO, CERRAR_SESION, /*MOSTRAR_USUARIO, LOGIN_EXITOSO, LOGIN_ERROR, CERRAR_SESION*/} from '../../types/index'
import React, {useReducer} from 'react';
import authReducer from './authReducer';
import authContext from './authContext';
import ClienteAxios from '../../config/axios'
import tokenAuth from '../../config/token'
import clienteAxios from '../../config/axios';

const AuthState = props => {

    const initialState = {
        token: localStorage.getItem('token'),
        autenticado: null,
        usuario: null,
        mensaje: null,
        cargando: true
    }

    const [state, dispatch] = useReducer(authReducer, initialState);


    // Funciones

    const registrarUsuario = async (datos) => {
        try {
            // console.log(datos)
            const respuesta = await ClienteAxios.post('/api/usuarios', datos);
            dispatch({
                type: REGISTRO_EXITOSO,
                // se envia token
                payload: respuesta.data
            });
            // Mostrar el usuario
            usuarioAutenticado()
        } catch (error) {
            // console.log(error.response.data.msg)
            const alerta = {
                msg: error.response.data.msg,
                categoria: 'alert alert-warning'
            }

            dispatch({
                type: REGISTRO_ERROR,
                payload: alerta
            })
        }
    }

    // Retornar el usuario autenticado
    const usuarioAutenticado = async () => {
        // ! ERROR LOCAL STORAGE
        let local = localStorage.getItem('token')
        if (local) {
            // funcion para enviar el token por headers
            tokenAuth(local)
        }

        try {
            const respuesta = await ClienteAxios.get('/api/auth');
            console.log(respuesta);
            dispatch({
                type: MOSTRAR_USUARIO,
                payload: respuesta.data.usuario
            })
        } catch (error) {
            console.log(error.response.data)
            dispatch({
                type: LOGIN_ERROR
            })
        }
    }

    // Cuando el usuario inicia sesion

    const iniciarSesion = async datos => {
        try {
            const respues = await clienteAxios.post('/api/auth', datos);
            
            dispatch({
                type: LOGIN_EXITOSO,
                payload: respues.data
            });

            // Mostrar el usuario
            usuarioAutenticado()
        } catch (error) {
            console.log(error.response.data.msg)
            const alerta = {
                msg: error.response.data.msg,
                categoria: 'alert alert-warning'
            }

            dispatch({
                type: LOGIN_ERROR,
                payload: alerta
            })
        }
    }

    // Cierra la sesion del usuario
    const cerrarSesion = () => {
        dispatch({
            type: CERRAR_SESION
        })
    }

    return (
        <authContext.Provider
            value = {{
                token: state.token,
                autenticado: state.autenticado,
                usuario: state.usuario,
                mensaje: state.mensaje,
                cargando: state.cargando,
                registrarUsuario,
                iniciarSesion,
                usuarioAutenticado,
                cerrarSesion
            }}
        >
        {props.children}
        </authContext.Provider>
    )
}

export default AuthState;


