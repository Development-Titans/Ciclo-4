import React, { Fragment, useContext, useEffect, useState} from "react";
import { Link } from "react-router-dom";
import "../../../styles/listaProductos.css";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import productoContext from "../../../context/productos/productoContext";
import authContext from "../../../context/autenticacion/authContext";

const AgregarProductos = () => {

    // Extraer la informacion de autenticacion
    const authCOntext = useContext(authContext);
    const {usuarioAutenticado, cerrarSesion} = authCOntext;

    useEffect(() => {
        usuarioAutenticado();
    }, [])

    // Obtener el state del formulario
    const productContext = useContext(productoContext);
    const {boton, mostrarBoton, agregarProductos, validarNombre, validar_nombre, validarPrecio, validar_precio, validar_stock, validarStock, validar_descripcion, validarDescripcion, validar_urlImagen, validarUrl} = productContext;


    // Mostrar productos

    // * State de agregar un producto
    const [productos, agre] = useState({
        id: '',
        nombre: '',
        precio: '',
        stock: '',
        descripcion: '',
        urlImagen: '',
    });

    // * Extraer datos
    let {id, nombre, precio, stock, descripcion, urlImagen} = productos;
    // Hacemos que se agreguen los datos al state cuando el usuario los ingrese

    const onChangi = e => {
        agre({
            ...productos,
            [e.target.name]: e.target.value
        })
    }

    // Mostrar el boton de ver productos
    const mos = () => {
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
        if (urlImagen === ''){
            validarUrl()
        }
        else{
            mostrarBoton();
            console.log(productos)
            agregarProductos(productos);
        }
    }

    return (
        <Fragment>
        <ul>
            <img src="./Logo.png" alt="no se puede ver" />
            {
                /* Si existen productos entonces { */
                boton ? (
                    <Link className="bot" to={"/listado-productos"}>
                    Lista de Productos
                    </Link>
                    /* sino existen entonces no muestre nada */
                ) : null
            }
            <Link className="bot" to={"/listado-ventas"}>
            Lista de Ventas
            </Link>
            <Link className="seleccionado" to={"/agregar-productos"}>
            Agregar Productos
            </Link>
            <Link className="bot" to={"/listado-productos"} 
            onClick={() => cerrarSesion()}
            >
            Cerrar Sesión
            </Link>
        </ul>
        <div className="centrar-tabla">
        <div className="table">
                <h1 style={{textAlign: "center", color: "black"}}>Agregar un Producto</h1>
                <Form>
                <Form.Group className="mb-3">
                        <Form.Label htmlFor="id">Id</Form.Label>
                        <Form.Control id="id" name="id" value={id} onChange={onChangi} type="text" placeholder="id"/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="nombre">Producto</Form.Label>
                        <Form.Control id="nombre" name="nombre" value={nombre} onChange={onChangi} type="text" placeholder="Nombre"/>
                    </Form.Group>
                        { /* Si validar_nombre es verdadero o true */
                        validar_nombre ? (
                            <h5 style={{color: 'red'}}>El nombre es obligatorio</h5>
                        ): null }
                    <Form.Group className="mb-3" >
                        <Form.Label htmlFor="precio">Precio</Form.Label>
                        <Form.Control id="precio" name="precio"  value={precio} onChange={onChangi} type="number" placeholder="0"/>
                    </Form.Group>
                    { /** Si validar_precio es verdadero o true */
                        validar_precio ? (
                            <h5 style={{color: 'red'}}>El precio es obligatorio</h5>
                            /* no hace nada */
                        ): null }
                    <Form.Group className="mb-3" >
                        <Form.Label htmlFor="stock">Stock</Form.Label>
                        <Form.Control id="stock" name="stock" value={stock} onChange={onChangi} type="number" placeholder="0"/>
                    </Form.Group>
                    { /** Si validar_stock es verdadero o true */
                        validar_stock ? (
                            <h5 style={{color: 'red'}}>El stock es obligatorio</h5>
                            /* no hace nada */
                        ): null }
                    <Form.Group className="mb-3" >
                        <Form.Label htmlFor="descripcion">Descripción</Form.Label>
                        <Form.Control id="descripcion" name="descripcion" value={descripcion} onChange={onChangi} type="text" placeholder="Descripción"/>
                    </Form.Group>
                    { /** Si validar_descripcion es verdadero o true */
                        validar_descripcion ? (
                            <h5 style={{color: 'red'}}>La descripcion es obligatoria</h5>
                            /* no hace nada */
                        ): null }
                    <Form.Group className="mb-3" >
                        <Form.Label htmlFor="urlImagen">Url Imagen</Form.Label>
                        <Form.Control id="urlImagen" name="urlImagen" value={urlImagen} onChange={onChangi} type="text" placeholder="Url" />
                    </Form.Group>
                    { /** Si validar_descripcion es verdadero o true */
                        validar_urlImagen ? (
                            <h5 style={{color: 'red'}}>La url es obligatoria</h5>
                            /* no hace nada */
                        ): null }
                    <Button href="/listado-productos" variant="primary" type="button" onClick={mos} >
                        Guardar
                    </Button>
                </Form>
            </div>
        </div>
        </Fragment>
    );
};

export default AgregarProductos;
