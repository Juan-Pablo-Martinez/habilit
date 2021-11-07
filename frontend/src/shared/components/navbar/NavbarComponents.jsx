import React, { Fragment} from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";


function NavbarComponents() {

    const { loginWithRedirect } = useAuth0();
    
    
    const { user, isAuthenticated, logout } = useAuth0();

 /*   */
    return (
        <Fragment>
            <nav className="navbar navbar-expand-lg bg-primario">
                <div className="container">
                    
                    <div className="container collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                           {isAuthenticated ? null: <button onClick={() => loginWithRedirect()}>INGRESAR</button>}
                        </div>
                        <br/>
                        <div className="navbar-nav">
                            <Link to="/AreaTrabajo" className="nav-link btn btn-dark">AREA DE TRABAJO</Link>
                        </div>
                    </div>
                    <form class="d-flex">
                        {isAuthenticated ? <button onClick={() => logout({returnTo: window.location.origin})}>SALIR</button> :null}
                        <button class="btn btn-outline-success" >{isAuthenticated ?user.email:"user"}</button>
                    </form> 
                </div>
            </nav> 
            <div className="container-fluid">
                <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                    <div class="container carousel-inner">
                        <div class="carousel-item">
                            <img src="http://4.bp.blogspot.com/-Nies-LnMz1w/UT9I6OhvewI/AAAAAAAALaw/uhk7aPZ7L_c/s1600/ejemplos-planes-empresa-gratis.jpg" class="d-block w-100" alt="" />
                        </div>
                        <div class="carousel-item active">
                            <img src="https://img.lovepik.com/photo/40017/1135.jpg_wh860.jpg" class="d-block w-100" alt="" />
                        </div>
                        <div class="carousel-item">
                            <img src="https://media.istockphoto.com/photos/creative-business-people-working-on-business-project-in-office-picture-id1164704303" class="d-block w-100" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>

    )
}


export default NavbarComponents;