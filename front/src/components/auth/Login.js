import React, {useState, Fragment } from "react";
import '../../styles/login.css';
import { Link } from 'react-router-dom';

const Login = () => {

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

        // Pasarlo al action
    }

    return (
        <Fragment>
        <div className="fondillo">
        <div className="login-box">
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
            <a style={{marginTop: '5%'}} href="/">
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
