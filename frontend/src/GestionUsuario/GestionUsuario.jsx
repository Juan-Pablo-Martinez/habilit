import React, { Fragment, useState, useEffect } from "react";
import NavbarComponents from "../shared/components/navbar/NavbarComponents";
import { Link } from "react-router-dom";
import apiBaseUrl from "../shared/utils/Api";
function GestionUsuario() {
    const [usuario, setUsuario]=useState([]);
    const number = [1, 2, 3, 4, 5];
    const listItems = number.map((number) =>
        <tr>
            <th scope="row">1</th>
            <td>Chaqueta nike</td>
            <td>180000</td>
            <td>Disponible</td>
        </tr>
    );
    const getUser = async () => {
        try {
            const res = await fetch(`https://my-backend-misiontic.herokuapp.com/get-usuarios`);
            const jsonResponse = await res.json();
            const responseUsuario = jsonResponse.data;
            const listUsuario = responseUsuario.map((usuarios) =>
               <tr>
                    <th scope="row">{usuarios.id}</th>
                    <td>{usuarios.name}</td>
                    <td>{usuarios.role}</td>
                    <td>{usuarios.email}</td>
                    <td>{usuarios.estado}</td>
                </tr>
            );
            setUsuario(listUsuario)
        }
        catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getUser();
    }, []);

    return (

        <Fragment>
            <div class="container-fluid ">
                <table class="table table-dark table-striped caption-top container">
                    <caption><h5>Gestion de Usuario</h5></caption>
                    <thead>
                        <tr>
                        <th scope="col">id</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Role</th>
                            <th scope="col">Email</th>
                            <th scope="col">Estado</th>
                        </tr>
                    </thead>
                    <tbody>
                        {usuario}
                    </tbody>
                </table>
                <br />
                <Link to="/AreaTrabajo" className="nav-link " type="submit" class="btn btn-info">REGRESAR</Link>
            </div>
        </Fragment>
    )
}
export default GestionUsuario;