import React, { Fragment } from "react";
import NavbarComponents from "../shared/components/navbar/NavbarComponents";
import { Link } from "react-router-dom";
import "./VentasStyles.css"

function BuscarActualizarVentas() {

    return (

        <Fragment>
            <div class="container-fluid fond">
                <div class="card bg-dark text-info">
                    <img src="https://www.cthomesllc.com/wp-content/uploads/2015/03/shutterstock_85271020.jpg" class="card-img" alt="" />
                    <div class="card-img-overlay">
                        <figure class="figure">
                            <img src="" class="figure-img img-fluid rounded" alt="" />
                            <figcaption class="figure-caption">Equipo S Mision Tic</figcaption>
                        </figure>
                        <h3 class="card-title">Maestro de Ventas</h3>
                        <br/>
                        <p class="card-text">Para buscar una venta, ingresa el ID de la venta y haz click en BUSCAR</p>
                        <form class="d-flex">
                            <input class="form me-3" type="search" placeholder="ID VENTAS" aria-label="Search" />
                            <button class="btn btn-outline-success" type="submit">BUSCAR</button>
                        </form>
                        <br /><br/>
                        <p class="card-text">Para ver la lista de ventas haz click en el siguiente boton</p>
                        <Link to="/ListaVentas" className="btn btn-outline-success" type="submit">Ventas</Link>
                        <br/><br/><br/>
                        <p class="card-text">Para actualizar una venta, ingresa el ID de la venta y haz click en actualizar</p>
                        <form class="d-flex">
                            <input class="form me-3" type="search" placeholder="ID VENTAS" aria-label="Search" />
                            <button class="btn btn-outline-success" type="submit">Actualizar</button>
                        </form>
                        <br /><br />
                        <Link to="/AreaTrabajo" className="nav-link " type="submit" class="btn btn-info">REGRESAR</Link>

                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default BuscarActualizarVentas;