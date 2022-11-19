import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from './components/auth/Login';
import NuevaCuenta from './components/auth/NuevaCuenta';
import AgregarProductos from './components/proyectos/admin/AgregarProductos';
import InicioAdmin from './components/proyectos/admin/Inicio'
import ListadoProductos from './components/proyectos/admin/ListadoProductos';
import ListadoVentas from './components/proyectos/admin/ListadoVentas';
import Tienda from './components/proyectos/user/Tienda';
import CarritoCompras from './components/proyectos/user/CarritoCompras'
import ModificarProductos from './components/proyectos/admin/ModificarProductos';
import ProductoState from './context/productos/productoState';
import Ventas from './context/ventas/ventasState';
import StoreState from './context/store/storeState';
import CarritoComp from './context/carritoCompras/carritoState';
import AlertaState from './context/alertas/alertaState';
import AuthState from './context/autenticacion/authState';
import tokenAuth from './config/token';

// Revisar si tenemos un token
const token = localStorage.getItem('token');
if(token) {
  tokenAuth(token);
}

function App() {

  return (
    <ProductoState>
      <AlertaState>
        <AuthState>
          <CarritoComp>
            <StoreState>
              <Ventas>
                <Router>
                  <Routes>
                    <Route exact path='/' element = {<Login/>} />
                    <Route exact path='/nueva-cuenta' element = {<NuevaCuenta />} />
                    <Route exact path='/inicio-admin' element = {<InicioAdmin/>} />
                    <Route exact path='/listado-productos' element = {<ListadoProductos/>} />
                    <Route exact path='/listado-ventas' element = {<ListadoVentas/>} />
                    <Route exact path='/agregar-productos' element = {<AgregarProductos/>} />
                    <Route exact path='/tienda' element = {<Tienda/>} />
                    <Route exact path='/carrito' element = {<CarritoCompras/>} />
                    <Route exact path='/modificar-productos' element = {<ModificarProductos/>} />
                  </Routes>
                </Router>
              </Ventas>
            </StoreState>
          </CarritoComp> 
        </AuthState>
      </AlertaState> 
    </ProductoState> 
  );
}

export default App;
