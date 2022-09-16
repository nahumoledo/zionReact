import { Link } from "react-router-dom"
import CartWidget from "../CartWidget"

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
                            <a class="nav-link active" aria-current="page" href="#"><Link to={`/category/:categoryId`}>Productos</Link></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#"><Link to={`/category/:categoryId`}>Nosotros</Link></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#"><Link to={`/category/:categoryId`}>Contacto</Link></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#"><Link to={`/category/:categoryId`}>Preguntas Frecuentes</Link></a>
                        </li>
                    </ul>
                    <CartWidget />
                </div>
            </div>
        </nav>
    )

}

export default NavBar