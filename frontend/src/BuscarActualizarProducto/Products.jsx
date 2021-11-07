import React, { Fragment } from "react";

import { Link } from "react-router-dom";


function Products() {

    return (

        <Fragment>
            <div class="container-fluid fond">
                <div class="card bg-dark text-info">
                    <img src="https://www.freejpg.com.ar/image-900/bb/bba4/F100009826-tienda_de_ropa.jpg" class="card-img" alt="" />
                    <div class="card-img-overlay">
                        <figure class="figure">
                            <img src="" class="figure-img img-fluid rounded" alt="" />
                            <figcaption class="figure-caption">Equipo S Mision Tic</figcaption>
                        </figure>
                        <h3 class="card-title">Maestro de Producto</h3>
                        <br/>
                        <p class="card-text">Para buscar un Producto, ingresa el ID del producto y haz click en BUSCAR</p>
                        <form class="d-flex">
                            <input class="form me-3" type="search" placeholder="ID PRODUCTO" aria-label="Search" />
                            <button class="btn btn-outline-success" type="submit">BUSCAR</button>
                        </form>
                        <br /><br/>
                        <p class="card-text">Para ver la lista de productos haz click en el siguiente boton</p>
                        <Link to="/ListaProductos" className="btn btn-outline-success" type="submit">Productos</Link>
                        <br/><br/><br/>
                        <p class="card-text">Para actualizar un producto, ingresa el ID del producto y haz click en actualizar</p>
                        <form class="d-flex">
                            <input class="form me-3" type="search" placeholder="ID PRODUCTO" aria-label="Search" />
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
export default Products;