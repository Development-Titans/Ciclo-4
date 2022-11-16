import React, {useState, Fragment, useContext } from "react";
import '../../styles/nuevaCuenta.css';
import { Link } from 'react-router-dom';
import alertaContext from '../../context/alertas/alertaContext'
import authContext from "../../context/autenticacion/authContext";

const NuevaCuenta = () => {

    // Registro nueva cuenta

    const auth = useContext(authContext);
    const {registrarUsuario} = auth;

    // Extraer los valores del context
    const alertica = useContext(alertaContext);
    const {alerta, mostrarAlerta} = alertica;

    // * State para iniciar Sesion
    // creamos un state con los datos a mostrar
    const [usuario, guardarUsuario] = useState({
        nombre: '',
        email: '',
        password: '',
        confirmar: ''
    });

    // * Extraer usuario
    const {nombre, email, password, confirmar} = usuario;

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
        console.log('dio clic')
        e.preventDefault();

        // Validar que no hayan campos vacios
        // ? el trim para eliminar espacios vacios
        if (nombre.trim() === '' || email.trim() === '' || password.trim() === '' || confirmar.trim() === '') {
            mostrarAlerta('Todos los campos son obligatorios', 'alert alert-warning')
            return;
        }
        // Contraseña minimo de 8 caracteres
        if(password.length < 6) {
            mostrarAlerta('La contraseña debe ser de al menos 6 caracteres', 'alert alert-warning');
            return;
        }
        // Las 2 contraseñas son iguales
        if(password !== confirmar) {
            mostrarAlerta('Las contraseñas no son iguales', 'alert alert-warning');
            return;
        }
        // Pasarlo al action
        registrarUsuario({
            nombre,
            email,
            password
        })
        
    }

    return (
        <Fragment>
        <div className="fondito">
        {alerta ? (
                <div className={`alerta ${alerta.categoria}`}> {alerta.msg} </div>
            ) : null}
        <div className="login-box">
            <h2>Obtener una Cuenta</h2>
            <span></span>
            <span></span>
            <form
                onSubmit={onSubmit}
            >
            <div className="user-box">
                <input id="nombre" onChange={onChange} value={nombre} type="text" name="nombre" required="nombre"/>
                <label htmlFor="nombre">Nombre de Usuario</label>
            </div>
            <div className="user-box">
                <input id="email" onChange={onChange} value={email} type="email" name="email" required="email"/>
                <label htmlFor="email">Correo Electronico</label>
            </div>
            <div className="user-box">
                <input id="password" onChange={onChange} value={password} type="password" name="password" required="password"/>
                <label htmlFor="password">Contraseña</label>
            </div>
            <div className="user-box">
                <input id="confirmar" onChange={onChange} value={confirmar} type="password" name="confirmar" required="confirmar"/>
                <label htmlFor="confirmar">Confirmar Contraseña</label>
            </div>
            <a type="submit" href="#" style={{marginTop: '5%', color: 'white'}} onClick={onSubmit}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Registrarme
            </a>
            <div>
                <Link style={{fontSize: '10px'}} className="crear_cuenta" to={'/'}>Volver a iniciar sesión</Link>
            </div>
            </form>
        </div>
        </div>
        </Fragment>
    );
};

export default NuevaCuenta;
