import React, { Fragment, useContext, useEffect } from 'react'
import '../../../styles/tienda.css'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import StoreContext from '../../../context/store/storeContext';

const Tienda = () => {

    // Extraer productos de state inicial
    const storeetContext = useContext(StoreContext);
    const {productos_store, mostrarProductosStore} = storeetContext;

    useEffect(() => {
        mostrarProductosStore()
    }, [])

    // Agregar al carrito de compras
    const agregarCarritoCompras = async (producto) => {

        await fetch('http://localhost:9000/api/carrito/' + producto._id, {
            method: 'put'
        })
        .then(res => alert('Se Agrego al carrito'))
        .catch(err => console.log(err))
        }
    

    return (
        <Fragment>
            <div className='nav'>
                <div>
                    <a href='/tienda'><img className='imagen-ti' alt='no se puede ver' src='./Logo.png'/></a>
                </div>
                <Form style={{width: '700px'}} className="d-flex">
                    <Form.Control
                        type="buscar"
                        placeholder="Buscar"
                        className="me-2"
                        aria-label="Buscar"
                    />
                    <Button variant="outline-light">Buscar</Button>
                </Form>
                <Button variant="primary">Cerrar Sesion</Button>
                
                <div>
                <a href='/carrito'><svg style={{width: '50px'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M24 0C10.7 0 0 10.7 0 24S10.7 48 24 48H76.1l60.3 316.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24-10.7 24-24s-10.7-24-24-24H179.9l-9.1-48h317c14.3 0 26.9-9.5 30.8-23.3l54-192C578.3 52.3 563 32 541.8 32H122l-2.4-12.5C117.4 8.2 107.5 0 96 0H24zM176 512c26.5 0 48-21.5 48-48s-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48zm336-48c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48z" /></svg></a>
                </div>
            </div>
            <img className='imagen_portada' src='./comprar.jpg' alt='no se puede ver'/>
            <h1 className='articulos'>Articulos</h1>
            <div className='contenedors'>
                {productos_store.map(iterador => {
                    return (
                        <div key={iterador._id}>
                            <div className='tarjetas'>
                                <img className='imagen-tar' src={iterador.urlImagen} alt='no se puede ver'/>
                                <h4>{iterador.nombre}</h4>
                                <h5>$ {iterador.precio}</h5>
                                <Button onClick={() => agregarCarritoCompras(iterador)} variant="primary">Agregar al Carrito</Button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </Fragment>
    )
}

export default Tienda;