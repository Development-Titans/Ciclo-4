import React, { Fragment } from "react";
import "../../../styles/inicio.css";

const InicioAdmin = () => {
    return (
        <Fragment>
            <div className="card-orden">
            <a className="decoracion" href="/productos">
                <div
                style={{ height: "100%", backgroundColor: "white" }}
                className="card tarjeta"
                >
                <img
                    src="./imagen_1.jpg"
                    alt="no se puede ver"
                    style={{ width: "90%", margin: "2% 2%" }}
                />
                <div className="container">
                    <h4 style={{ textAlign: "center" }}>
                    <b>Lista de Productos</b>
                    </h4>
                </div>
                </div>
            </a>
            <a className="decoracion" href="/productos">
                <div
                style={{ height: "100%", backgroundColor: "white" }}
                className="card tarjeta"
                >
                <img
                    src="./ventas.jpg"
                    alt="no se puede ver"
                    style={{ width: "90%", margin: "17% 4%" }}
                />
                <div className="container">
                    <h4 style={{ textAlign: "center" }}>
                    <b>Lista de Ventas</b>
                    </h4>
                </div>
                </div>
            </a>
            <a className="decoracion" href="/productos">
                <div
                style={{ height: "100%", backgroundColor: "white" }}
                className="card tarjeta"
                >
                <img
                    src="./agregar.jpg"
                    alt="no se puede ver"
                    style={{ width: "90%", margin: "2% 2%" }}
                />
                <div className="container">
                    <h4 style={{ textAlign: "center" }}>
                    <b>Agregar un Producto</b>
                    </h4>
                </div>
                </div>
            </a>
            </div>


        </Fragment>
    );
};

export default InicioAdmin;
