import React, { Fragment, useState, useEffect } from "react";
import NavbarComponents from "../shared/components/navbar/NavbarComponents";
import { Link } from "react-router-dom";
import "./VentasStyles.css"
import apiBaseUrl from "../shared/utils/Api";

function ListaVentas() {
    const [ventas, setVentas] = useState([]);
    const getVentas = async () => {
        try {
            const response = await fetch(`${apiBaseUrl}/get-ventas`);
            const jsonResponse = await response.json();
            const responseVentas = jsonResponse.data;
            const listVentas = responseVentas.map((ventas) =>
                <tr>
                    <th scope="row">{ventas.id}</th>
                    <td>{ventas.valorTotal}</td>
                    <td>{ventas.idProduct}</td>
                    <td>{ventas.cantProduct}</td>
                    <td>{ventas.valorProduct}</td>
                    <td>{ventas.fechaVenta}</td>
                    <td>{ventas.nameCliente}</td>
                    <td>{ventas.idCliente}</td>
                    <td>{ventas.vendedor}</td>
                    <td>{ventas.estadoVentas}</td>
                </tr>
            );
            setVentas(listVentas);
        }
        catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getVentas();
    }, []);
    return (
        <Fragment>
            <div class="container-fluid fond">
                <div class="card bg-dark text-black">
                    <img src="https://cdn.pixabay.com/photo/2018/01/23/03/39/handshake-3100563_960_720.jpg" class="card-img" alt="" />
                    <div class="card-img-overlay">
                        <figure class="figure">
                            <img src="" class="figure-img img-fluid rounded" alt="" />
                            <figcaption class="figure-caption">Equipo S Mision Tic</figcaption>
                        </figure>
                        <table class="table table-success table-striped caption-top ">
                            <caption><h5 className="text-center text-withe btn-light">Lista de Ventas</h5></caption>
                            <thead>
                                <tr>
                                    <th scope="col">ID-Ventas</th>
                                    <th scope="col">Valor-Total</th>
                                    <th scope="col">ID-Producto</th>
                                    <th scope="col">Cantidad-Producto</th>
                                    <th scope="col">Precio-Producto</th>
                                    <th scope="col">Fecha-Venta</th>
                                    <th scope="col">Nombre-Cliente</th>
                                    <th scope="col">ID-Cliente</th>
                                    <th scope="col">Vendedor</th>
                                    <th scope="col">Estado_Venta</th>
                                </tr>
                            </thead>
                            <tbody>
                                {ventas}
                            </tbody>
                        </table>
                        <br />
                        <Link to="/BuscarActualizarVentas" className="nav-link " type="submit" class="btn btn-light">REGRESAR</Link>
                    </div>
                </div>
            </div>

        </Fragment>
    )
}
export default ListaVentas;