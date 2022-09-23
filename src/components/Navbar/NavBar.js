import { NavLink, Link } from "react-router-dom"
import CartWidget from "../CartWidget"
import React from "react"

function NavBar() {
    return ( 
        <nav class="navbar navbar-expand-md navbar-dark bg-dark">
            <div class="container-fluid">
                <Link to={`/`} class="navbar-brand" id="title">ZION</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <ul class="navbar-nav me-auto mb-2 mb-md-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#"><NavLink to={`/category/Productos`}>Productos</NavLink></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#"><NavLink to={`/category/Nosotros`}>Nosotros</NavLink></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#"><NavLink to={`/category/Contacto`}>Contacto</NavLink></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#"><NavLink to={`/category/PreguntasFrecuentes`}>Preguntas Frecuentes</NavLink></a>
                        </li>
                    </ul>
                    <CartWidget />
                </div>
            </div>
        </nav>
    )

}

export default NavBar