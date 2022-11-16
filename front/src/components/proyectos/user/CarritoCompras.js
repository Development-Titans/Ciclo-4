import React, { Fragment, useContext, useEffect } from "react";
import "../../../styles/tienda.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import carritoContext from "../../../context/carritoCompras/carritoContext";

const CarritoCompras = () => {

    const carri = useContext(carritoContext);
    const {carrito_compras, datos_carrito, mostrarCarrito, mostrarDatos} = carri;

    useEffect(() => {
        mostrarCarrito();
    }, [])

    // Si carrito de compras no tiene datos entoncces no haga nada
    if (carrito_compras.length === 0) {
        let prueba = 1;
    }else{
        // pero si carrito de compras tiene datos entonces active la funcion para mostrarlos
        mostrarDatos()
    }
    return (
        <Fragment>
        <div className="nav">
            <div>
            <a href="/tienda">
                <img className="imagen-ti" alt="no se puede ver" src="./Logo.png" />
            </a>
            </div>
            <Form style={{ width: "700px" }} className="d-flex">
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
            <a href="/carrito">
                <svg
                style={{ width: "50px" }}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                >
                <path d="M24 0C10.7 0 0 10.7 0 24S10.7 48 24 48H76.1l60.3 316.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24-10.7 24-24s-10.7-24-24-24H179.9l-9.1-48h317c14.3 0 26.9-9.5 30.8-23.3l54-192C578.3 52.3 563 32 541.8 32H122l-2.4-12.5C117.4 8.2 107.5 0 96 0H24zM176 512c26.5 0 48-21.5 48-48s-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48zm336-48c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48z" />
                </svg>
            </a>
            </div>
        </div>
        <main className="container" style={{ marginTop: "4%" }}>
                <h1>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="80"
                        height="80"
                        fill="currentColor"
                        className="bi bi-cart2"
                        viewBox="0 0 16 16"
                    >
                        <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                    </svg>{" "}
                    Carrito de compras
                </h1>
                <hr></hr>
                <div className="titulos">
                    <h4>Productos</h4>
                    <h4>Precio por Unidad</h4>
                    <h4>Cantidad</h4>
                    <h4>Subtotal</h4>
                    <h4>Eliminar del Carrito</h4>
                </div>
                <hr
                    className="linea"
                    style={{ display: "inline-flex", width: "1050px" }}
                ></hr>
                {/*---------------------------------------------------------------------------------------- */}
                {datos_carrito ? (
                    carrito_compras.map(mostrar => {
                        return (
                            <Fragment key={mostrar.id}>
                            <div
                            className="titulos"
                            style={{ alignItems: "center", marginTop: "0" }}
                        >
                            <div style={{ maxWidth: "50%" }}>
                                <img
                                    src={mostrar.url_imagen}
                                    className="card-img-top"
                                    alt="No se observa"
                                />
                            </div>
                            <h5>$ {mostrar.precio}</h5>
                            <h5>{mostrar.cantidad}</h5>
                            <h5>$ {mostrar.precio}</h5>
                            <button
                                type="button"
                                className="btn btn-danger">
                                Eliminar
                            </button>
                        </div>
                <div className="total">
                    <h4 style={{ fontSize: "3rem" }}>TOTAL</h4>
                    <h4 style={{ fontSize: "3rem" }}>$ {mostrar.total}</h4>
                </div>
                <div>
                <Button href="/store" style={{ width: "40%", marginTop: "4%", height: "48PX", marginBottom: "8%", paddingTop: "1%" }} variant="outline-danger">
                        CANCELAR COMPRA
                    </Button>
                    <Button style={{ width: "40%", marginTop: "4%", marginLeft: "20%", marginBottom: "8%" }} variant="primary" size="lg">
                        COMPRAR
                    </Button>
                    
                </div>
                </Fragment>
                        )
                    })
                ): <h1 style={{marginTop: '6%', marginLeft: '30%'}}>EL CARRITO ESTA VACIO</h1>}
            </main>
        </Fragment>
    );
};

export default CarritoCompras;
