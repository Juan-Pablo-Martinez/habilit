import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";

import apiBaseUrl from "../shared/utils/Api";

function ListaProductos() {
    const [producto, setProducto] = useState([]);
    const getProductos = async () => {
        try {
            const response = await fetch(`${apiBaseUrl}/get-products`);
            const jsonResponse = await response.json();
            const responseProductos = jsonResponse.data;
            const listProductos = responseProductos.map((productos) =>
                <tr>
                    <th scope="row">{productos.id}</th>
                    <td>{productos.descripcion}</td>
                    <td>{productos.valor}</td>
                    <td>{productos.estado}</td>
                </tr>
            );
            setProducto(listProductos);
        }
        catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getProductos();
    }, []);
    return (
        <Fragment>
            <div class="container-fluid fond">
                <div class="card bg-dark text-black">
                    <img src="https://th.bing.com/th/id/R.0141e19f7bddcb3fce5c4cde315c63b0?rik=93Tp1kdiDdGmQQ&riu=http%3a%2f%2f99portal.com.br%2fwp-content%2fuploads%2f2018%2f06%2fDECORA%C3%87%C3%83O-DE-BRECH%C3%93S.jpg&ehk=KN0t%2bh%2fmyDVupeX6m3dEarv4cWTZXYfn53fpltpn15M%3d&risl=&pid=ImgRaw&r=0" class="card-img" alt="" />
                    <div class="card-img-overlay">
                        <figure class="figure">
                            <img src="" class="figure-img img-fluid rounded" alt="" />
                            <figcaption class="figure-caption">Equipo S Mision Tic</figcaption>
                        </figure>
                        <table class="table table-success table-striped caption-top ">
                            <caption><h5 className="text-center text-withe btn-light">Lista de productos</h5></caption>
                            <thead>
                                <tr>
                                    <th scope="row">id</th>
                                    <td>descripcion</td>
                                    <td>valor</td>
                                    <td>estado</td>
                                </tr>
                            </thead>
                            <tbody>
                                {producto}
                            </tbody>
                        </table>
                        <br />
                        <Link to="/Products" className="nav-link " type="submit" class="btn btn-light">REGRESAR</Link>
                    </div>
                </div>
            </div>

        </Fragment>
    )
}
export default ListaProductos;