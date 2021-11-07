import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import "./StilosRegVen.css";

const RegisterVentas = () => {
    const [valorTotal, setValorTotal] = useState(0);
    const [idProduct, setIdProduct] = useState(0);
    const [cantProduct, setCantProduct] = useState(0);
    const [valorProduct, setValorProduct] = useState(0);
    const [fechaVenta, setFechaVenta] = useState();
    const [nameCliente, setNameCliente] = useState("");
    const [idCliente, setIdCliente] = useState(0);
    const [vendedor, setVendedor] = useState("");
    const [estadoVentas, setEstadoVentas] = useState("");
    const postSales = async () => {
        const salesData = {
            valorTotal: valorTotal,
            idProduct: idProduct,
            cantProduct: cantProduct,
            valorProduct: valorProduct,
            fechaVenta: fechaVenta,
            nameCliente: nameCliente,
            idCliente: idCliente,
            vendedor: vendedor,
            estadoVentas: estadoVentas
        }

        const response = await fetch(`https://my-backend-misiontic.herokuapp.com/post-ventas`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(salesData)
        });
        const jsonResponse = await response.json();
        console.log(jsonResponse);
    }


    return (

        <Fragment>
            <div class="container-fluid user-1">
                <div class="container user">
                    <br />
                    <figure class="text-center">
                        <blockquote class="blockquote">
                            <h2>Registrar Venta</h2>
                        </blockquote>
                    </figure>


                    <div class="container">
                        <form class="row g-3 user-2">
                            <div class="col-md-2 mx-auto">
                                <label for="inputZip" class="form-label">Total a Pagar</label>
                                <input type="number" class="form-control" id="inputZip" placeholder="Total $" onChange={(e) => setValorTotal(e.target.value)} />
                                <br />
                            </div>

                        </form>
                        <br />
                        <div class="container user">
                            <br />
                            <figure class="text-center">
                                <blockquote class="blockquote">
                                    <h4>Datos del Producto</h4>
                                </blockquote>
                            </figure>
                        </div>
                        <form class="row g-3 user-2">
                            <div class="col-md-2 mx-auto">
                                <label for="inputZip" class="form-label">Id Producto</label>
                                <input type="number" class="form-control" id="inputZip" placeholder="ID Producto - unico" onChange={(e) => setIdProduct(e.target.value)} /><br/>
                            </div>
                            <div class="col-md-2 mx-auto">
                                <label for="inputZip" class="form-label">cantidad</label>
                                <input type="number" class="form-control" id="inputZip" placeholder="Cantidad" onChange={(e) => setCantProduct(e.target.value)} />
                            </div>
                            <div class="col-md-2 mx-auto">
                                <label for="inputZip" class="form-label">Valor del producto</label>
                                <input type="number" class="form-control" id="inputZip" placeholder="Precio Unitario" onChange={(e) => setValorProduct(e.target.value)} />
                            </div>
                            <div class="col-md-6 mx-auto">
                                <label>
                                    <h4 class="fuenteTitulo"> Fecha de venta </h4>
                                    <div class="User">
                                        <input type="date" onChange={(e) => setFechaVenta(e.target.value)} />
                                    </div>
                                </label>
                            </div>
                            <br/>
                            <br/>
                        </form>
                        <br />
                        <div class="container user">
                            <br />
                            <figure class="text-center">
                                <blockquote class="blockquote">
                                    <h4>Datos del Cliente</h4>
                                </blockquote>
                            </figure>
                        </div>
                        <br />
                        <form class="row g-3 user-2">
                            <div class="col-md-6">
                                <label for="inputText" class="form-label">Nombre del Cliente</label>
                                <input type="text" class="form-control" id="inputText" placeholder="Nombre Completo" onChange={(e) => setNameCliente(e.target.value)} />
                                <br />
                            </div>
                            <div class="col-md-2 mx-auto">
                                <label for="inputZip" class="form-label">Id Cliente</label>
                                <input type="number" class="form-control" id="inputZip" placeholder="ID Cliente" onChange={(e) => setIdCliente(e.target.value)} />
                            </div>
                        </form>
                        <br />
                        <div class="container user">
                            <br />
                            <figure class="text-center">
                                <blockquote class="blockquote">
                                    <h4>Vendedor</h4>
                                </blockquote>
                            </figure>
                        </div>
                        <form class="user-2">
                            <div class="col-md-6 mx-auto">
                                <label for="inputText" class="form-label">Encargado de la Venta</label>
                                <input type="text" class="form-control" id="inputText" placeholder="Nombre del Vendedor" onChange={(e) => setVendedor(e.target.value)} />
                            </div>
                            <div class="col-md-6 mx-auto">
                                <label for="inputText" class="form-label">Estado de la Venta</label>
                                <input type="text" class="form-control" id="inputText" placeholder="'Cancelado' o 'No cancelado'" onChange={(e) => setEstadoVentas(e.target.value)} />
                            </div>
                            <br/>
                        </form>
                        <br />
                        <div class="vstack gap-2 col-md-5 mx-auto">
                            <button type="button" class="btn btn-secondary user-1" onClick={postSales}><Link to="/AreaTrabajo">GUARDAR</Link></button>
                            <button type="button" class="btn btn-secondary user-1"><Link to="/AreaTrabajo">REGRESAR</Link></button>
                            <br />
                        </div>
                        <br />
                    </div>
                </div>
            </div>
        </Fragment >
    )
}
export default RegisterVentas;