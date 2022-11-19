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

    const eliminarProducto = async (id) => {
        await fetch('http://localhost:9000/api/productos/' + id, {
            method: 'DELETE'
        })
        .then(res => alert('Se elimino el producto'))
        .then(res=> {
            console.log(res);
        
        })
        .catch((error) => console.log(error))
        
    }

    const modificarArticulo = (id) => {
        localStorage.setItem('articulo', JSON.stringify(id));
    }

    let num = 0
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
                num = num + 1
                return(
                    <div key={pro._id} style={{marginBottom: '2%'}} className='caja'>
                    <h2   className='num'>{num}</h2>
                        <img className='imagen-viendo' src={pro.urlImagen} alt='no se puede ver'/>
                        <p className='parrafo'>{pro.descripcion}</p>
                    <Button onClick={() => modificarArticulo(pro)} href='/modificar-productos' className='botones' style={{height: '40px', width: '200px'}} variant="primary">Modificar</Button>
                    <Button href='/listado-productos' onClick={() => eliminarProducto(pro._id)} className='botones' style={{height: '40px', width: '200px'}} variant="outline-danger">Eliminar</Button>
                </div>
                )
            })}

        </Fragment>
    )
}

export default ListadoProductos;