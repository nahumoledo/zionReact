import CartWidget from "./CartWidget"

function NavBar() {
    return ( 
        <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">ZION</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <ul class="navbar-nav me-auto mb-2 mb-md-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Productos</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Nosotros</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Contacto</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Preguntas Frecuentes</a>
                        </li>
                    </ul>
                    <CartWidget />
                </div>
            </div>
        </nav>
    )

}

export default NavBar