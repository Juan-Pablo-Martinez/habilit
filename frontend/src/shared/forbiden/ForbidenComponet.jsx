import React from 'react'
import { Link } from "react-router-dom";

const ForbidenComponet = () => {
    return (
        <div>
           <h1>No tines permiso para ingresar a esta zona</h1> 
           <br/>
           <Link to="/" className="btn btn-warning">REGRESAR</Link>
        </div>

    )
}

export default ForbidenComponet
