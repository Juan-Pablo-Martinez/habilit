import React, {Fragment} from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import NavbarComponents from './shared/components/navbar/NavbarComponents';
import AreaTrabajo from './AreaTrabajo/AreaTrabajo';
import RegisProduct from './Registro de producto/RegisProduct';
import RegisterVentas from './RegisterVentas/RegisterVentas';
import BuscarActualizarVentas from './BuscarActualizarVentas/BuascarActualizarVentas';
import GestionUsuario from './GestionUsuario/GestionUsuario';
import ListaVentas from './BuscarActualizarVentas/ListaVentas';
import Products from './BuscarActualizarProducto/Products';
import ListaProductos from './BuscarActualizarProducto/ListaProducts';
import ForbidenComponet from './shared/forbiden/ForbidenComponet';



function App() {

  
  return (
    <Router>
      <Switch>
         
        <Route path ="/" exact>
          <NavbarComponents />  
        </Route>

        <Route path ="/AreaTrabajo" exact>
        <AreaTrabajo></AreaTrabajo>
        </Route> 

        <Route path="/Products" exact>
          <Products></Products>
        </Route>

        <Route path="/ListaProductos" exact>
          <ListaProductos></ListaProductos>
        </Route>
        
        <Route path="/RegisProduct" exact>
          <RegisProduct></RegisProduct>
        </Route>
        
        <Route path="/RegisterVentas" exact>
          <RegisterVentas></RegisterVentas>
        </Route>
        
        <Route path="/BuscarActualizarVentas" exact>
          <BuscarActualizarVentas></BuscarActualizarVentas>
        </Route>

        <Route path="/ListaVentas" exact>
          <ListaVentas/>
        </Route>

        <Route path="/GestionUsuario" exact>
          <GestionUsuario></GestionUsuario>
        </Route>
        
        <Route path="/forbiden" exact>
          <ForbidenComponet></ForbidenComponet>
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
