import React, { Fragment, useState } from "react";
import NavbarComponents from "../shared/components/navbar/NavbarComponents";
import { Link } from "react-router-dom";
import apiBaseUrl from "../shared/utils/Api";


const RegisProduct =()=> {
    const [descripcion, setDescripcion] = useState("");
    const [valor, setValor] = useState(0);
    const [estado, setEstado] = useState("");

    const postProduct = async () => {
        const productData = {
            descripcion: descripcion,
            valor: valor,
            estado: estado
        }

        const response = await fetch(`https://my-backend-misiontic.herokuapp.com/post-products`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(productData)
        });
        const jsonResponse = await response.json();
        console.log(jsonResponse);
    }

    return (
        <Fragment>
            <div className="container">
            <img src="https://image.jimcdn.com/app/cms/image/transf/dimension=1920x400:format=jpg/path/s9f932ac486adad33/image/i67e419d0f98de174/version/1520523746/image.jpg" class="card-img" alt="" />
                    <div class="card-img-overlay">
                        <div className="text-center"><h1 class="text-white">REGISTRAR PRODUCTO</h1></div>
                        
                <div className="formulario container">
                    <form className="container">
                        <br />
                        <h4 class="text-white">Descripcion del producto</h4><input type="text" placeholder="Ingrese descripcion" name="nombre" onChange={(e) => setDescripcion(e.target.value)} /><br /><br />
                        <h4 class="text-white">Valor unitario del producto</h4><input type="number" placeholder="Precio" name="precio" onChange={(e) => setValor(e.target.value)} /><br /><br />
                        <h4 class="text-white">Estado</h4><input type="text" placeholder="'Disponible' o 'No Disponible'" name="nombre" onChange={(e) => setEstado(e.target.value)} /><br /><br />
                        <button type="button" className="btn btn-secondary" onClick={postProduct}><Link to="/AreaTrabajo" className="btn btn-light">Guardar</Link></button>
                        <br /><br />
                        <button type="button" className="btn btn-secondary"><Link to="/AreaTrabajo" className="btn btn-light">REGRESAR</Link></button>

                    </form>
                </div>


              </div>


            </div>
        </Fragment>);
}
export default RegisProduct;