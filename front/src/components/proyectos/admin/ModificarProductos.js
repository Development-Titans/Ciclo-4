import React, { Fragment, useState, useContext } from "react";
import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import productoContext from "../../../context/productos/productoContext";

const ModificarProductos = () => {

    // Obtener el state del formulario
    const productContext = useContext(productoContext);
    const {validarNombre, validar_nombre, validarPrecio, validar_precio, validar_stock, validarStock, validar_descripcion, validarDescripcion, validar_url_imagen, validarUrl} = productContext;


    // * State de agregar un producto
    const [producto, modificarProducto] = useState({
        nombre: '',
        precio: '',
        stock: '',
        descripcion: '',
        url_imagen: '',
    });

    // * Extraer datos
    const {nombre, precio, stock, descripcion, url_imagen} = producto;

    // Hacemos que se agreguen los datos al state cuando el usuario los ingrese

    const onChango = e => {
        modificarProducto({
            ...producto,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = e => {
        e.preventDefault();

        // Validar que no hayan campos vacios

        // Pasarlo al action
    }

    const validar = () => {
        // Validar el producto
        if (nombre === '') {
            validarNombre()
        }
        if (precio === '') {
            validarPrecio()
        }
        if (stock === ''){
            validarStock()
        }
        if (descripcion === ''){
            validarDescripcion()
        }
        if (url_imagen === ''){
            validarUrl()
        }
    }

    return(
        <Fragment>
        <ul>
            <img src="./Logo.png" alt="no se puede ver" />
            <Link className="seleccionado" to={"/listado-productos"}>
            Lista de Productos
            </Link>
            <Link className="bot" to={"/listado-ventas"}>
            Lista de Ventas
            </Link>
            <Link className="bot" to={"/agregar-productos"}>
            Agregar Productos
            </Link>
            <Link className="bot" to={"/listado-productos"}>
            Cerrar Sesión
            </Link>
        </ul>
        <div className="centrar-tabla">
        <div className="table">
                <h1 style={{textAlign: "center", color: "black"}}>Modificar Producto</h1>
                <Form onSubmit={onSubmit}>
                    <Form.Group className="mb-3" >
                        <Form.Label htmlFor="nombre">Producto</Form.Label>
                        <Form.Control id="nombre" name="nombre" value={nombre} onChange={onChango} type="text" placeholder="Nombre"/>
                    </Form.Group>
                    { /* Si validar_nombre es verdadero o true */
                        validar_nombre ? (
                            <h5 style={{color: 'red'}}>El nombre es obligatorio</h5>
                        ): null }
                    <Form.Group className="mb-3" >
                        <Form.Label htmlFor="precio">Precio</Form.Label>
                        <Form.Control id="precio" name="precio" value={precio} onChange={onChango} type="text" placeholder="Valor"/>
                    </Form.Group>
                    { /** Si validar_precio es verdadero o true */
                        validar_precio ? (
                            <h5 style={{color: 'red'}}>El precio es obligatorio</h5>
                            /* no hace nada */
                        ): null }
                    <Form.Group className="mb-3" >
                        <Form.Label htmlFor="stock">Stock</Form.Label>
                        <Form.Control id="stock" name="stock" value={stock} onChange={onChango} type="number" placeholder="Cantidad"/>
                    </Form.Group>
                    { /** Si validar_stock es verdadero o true */
                        validar_stock ? (
                            <h5 style={{color: 'red'}}>El stock es obligatorio</h5>
                            /* no hace nada */
                        ): null }
                    <Form.Group className="mb-3" >
                        <Form.Label htmlFor="descripcion">Descripción</Form.Label>
                        <Form.Control id="descripcion" name="descripcion" value={descripcion} onChange={onChango} type="text" placeholder="Descripción"/>
                    </Form.Group>
                    { /** Si validar_descripcion es verdadero o true */
                        validar_descripcion ? (
                            <h5 style={{color: 'red'}}>La descripcion es obligatoria</h5>
                            /* no hace nada */
                        ): null }
                    <Form.Group className="mb-3" >
                        <Form.Label htmlFor="url_imagen">Url Imagen</Form.Label>
                        <Form.Control id="url_imagen" name="url_imagen" value={url_imagen} onChange={onChango} type="text" placeholder="Url" />
                    </Form.Group>
                    { /** Si validar_descripcion es verdadero o true */
                        validar_url_imagen ? (
                            <h5 style={{color: 'red'}}>La url es obligatoria</h5>
                            /* no hace nada */
                        ): null }
                    <Button variant="primary" onClick={validar}>
                        Guardar
                    </Button>
                </Form>
            </div>
        </div>
        </Fragment>
    )
}

export default ModificarProductos;