import React, {useContext, useEffect} from "react";
import { Route, Navigate } from "react-router-dom";
import authContext from "../../context/autenticacion/authContext";

const RutaPrivada = ({element: Element, ...props}) => {

    const authContexto = useContext(authContext);
    const {autenticado, cargando, usuarioAutenticado} = authContexto;

    useEffect(() => {
        usuarioAutenticado();
    }, [])

    return(
        <Route {...props} render = {props => !autenticado && !cargando ? (
            <Navigate to='/'/>
        ): (
            <Element {...props}/>
        )}/>
    )
}

export default RutaPrivada