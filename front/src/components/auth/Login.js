import React, {useState, Fragment, useContext, useEffect } from "react";
import '../../styles/login.css';
import { Link, useNavigate } from 'react-router-dom';
import alertaContext from '../../context/alertas/alertaContext'
import authContext from "../../context/autenticacion/authContext";

const Login = () => {

    // traemos history
    const navigate = useNavigate();
    // Registro nueva cuenta
    const auth = useContext(authContext);
    const {iniciarSesion, mensaje, autenticado} = auth;

    // Extraer los valores del context
    const alertica = useContext(alertaContext);
    const {alerta, mostrarAlerta} = alertica;

     // ! En caso de que el password o usuario no exista
    useEffect(() => {
        if(autenticado) {
            navigate('/tienda');
        }

        if(mensaje) {
            mostrarAlerta(mensaje.msg, mensaje.categoria)
        }
    }, [mensaje, autenticado, navigate]);



    // * State para iniciar Sesion
    // creamos un state con los datos a mostrar
    const [usuario, guardarUsuario] = useState({
        email: '',
        password: ''
    });

    // * Extraer usuario
    const {email, password} = usuario;

    // Hacemos que se agreguen los datos al state cuando el usuario los ingrese
    const onChange = e => {
        guardarUsuario({
            ...usuario,
            // enviamos el valor del campo
            [e.target.name]: e.target.value
        })
    }

    //* Cuando el usuario quiere iniciar sesion

    const onSubmit = e => {
        e.preventDefault();

        // Validar que no hayan campos vacios
        if(email.trim() === '' || password.trim() === ''){
            mostrarAlerta('Todos los campos son obligatorios', 'alert alert-warning')
            return;
        }
        // Pasarlo al action
        iniciarSesion({email, password})
    }

    return (
        <Fragment>
        <div className="fondillo">
        <div className="login-box">
        {alerta ? (
                <div className={`alerta ${alerta.categoria}`}> {alerta.msg} </div>
            ) : null}
            <h2>Acceso</h2>
            <form
                onSubmit={onSubmit}
            >
            <div className="user-box">
                <input id="email" onChange={onChange} value={email} type="text" name="email" required="email"/>
                <label htmlFor="email">Nombre de Usuario</label>
            </div>
            <div className="user-box">
                <input id="password" onChange={onChange} value={password} type="password" name="password" required="nombre" />
                <label htmlFor="password">Contraseña</label>
            </div>
            <a href="#" style={{marginTop: '5%', color: 'white'}} onClick={onSubmit}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Entrar
            </a>
            <div>
                <Link style={{fontSize: '10px'}} className="crear_cuenta" to={'/nueva-cuenta'}>Crear una cuenta</Link>
            </div>
            </form>
        </div>
        </div>
        </Fragment>
    );
};

export default Login;
