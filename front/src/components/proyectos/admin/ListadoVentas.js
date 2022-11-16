import React, { Fragment, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import '../../../styles/listaProductos.css'
import ventasContext from '../../../context/ventas/ventasContext';

const ListadoVentas = () => {

    // Extraer ventas de state inicial
    const ventContext = useContext(ventasContext);
    const {ventas, mostrarVentas} = ventContext;

    useEffect(() => {
        mostrarVentas()
    }, [])


    return (
        <Fragment>
            <ul>
            <img src="./Logo.png" alt="no se puede ver" />
            <Link className='bot' to={"/listado-productos"}> Lista de Productos</Link>
            <Link className="seleccionado" to={"/listado-ventas"}>
                Lista de Ventas
            </Link>
            <Link className='bot' to={"/agregar-productos"}>Agregar Productos</Link>
            <Link className='bot' to={"/listado-productos"}>Cerrar Sesión</Link>
            </ul>
        <h1 className="titulo_ventas ">Lista de Ventas</h1>
        <div className="contenido">
            <h2 className="letras">Nombre</h2>
            <h2 className="letras">Categoria</h2>
            <h2 className="letras">Precio</h2>
            <h2 className="letras">Fecha</h2>
        </div>
        {ventas.map(x => {
            return (
                <div key={x.id} style={{marginBottom: '1%'}} className='caja2'>
                    <h2 className="letra_ventas">{x.nombre}</h2>
                    <h2 className="letra_ventas">{x.categoria}</h2>
                    <h2 className="letra_ventas">$ {x.precio}</h2>
                    <h2 className="letra_ventas">{x.fecha}</h2>
                </div>
            )
        })}
        </Fragment>
    );
};

export default ListadoVentas;
