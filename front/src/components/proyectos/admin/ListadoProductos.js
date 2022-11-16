import React, { Fragment, useContext, useEffect } from 'react'
import '../../../styles/listaProductos.css'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import productoContext from '../../../context/productos/productoContext';


const ListadoProductos = () => {

    // Extraer productos de state inicial
    const productContext = useContext(productoContext);
    const {productos, mostrarProductos} = productContext;
    
    // Mostrar productos
    useEffect( () => {
        mostrarProductos();
    }, [])

    // Revisar si productos tiene contenido
    //if(productos.length === 0) return null;


    return(
        <Fragment>
            <div className='fondo'>
                <ul>
                    <img src='./Logo.png' alt='no se puede ver'/>
                    <Link className='seleccionado' to={"/listado-productos"}> Lista de Productos</Link>
                    <Link className='bot' to={"/listado-ventas"}>Lista de Ventas</Link>
                    <Link className='bot' to={"/agregar-productos"}>Agregar Productos</Link>
                    <Link className='bot' to={"/listado-productos"}>Cerrar Sesión</Link>
                </ul>
            </div>
            <img className='imagen' src='./Banner_admin.png' alt='no se puede ver'/>
            <h1 className='titulo'>Articulos</h1>
            {productos.map(pro =>{
                return(
                    <div key={pro.id} style={{marginBottom: '1%'}} className='caja'>
                    <h2 className='num'>{pro.numero}</h2>
                        <img className='imagen-viendo' src={pro.url} alt='no se puede ver'/>
                        <p className='parrafo'>{pro.parrafo}</p>
                    <Button href='/modificar-productos' className='botones' style={{height: '40px', width: '200px'}} variant="primary">Modificar</Button>
                    <Button className='botones' style={{height: '40px', width: '200px'}} variant="outline-danger">Eliminar</Button>
                </div>
                )
            })}

        </Fragment>
    )
}

export default ListadoProductos;