import React from "react";

function Footer(){
    return(
        <footer className="py-5 dark bg-dark">
            <div className="row">
                <div className="col-6 col-md-2 mb-3">
                <ul className="nav flex-column" id="ft">
                    <li className="nav-item mb-2"><a href="#" className="nav-link" style={{textDecoration: 'none', color: 'white'}}>Productos</a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link" style={{textDecoration: 'none', color: 'white'}}>Nosotros</a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link" style={{textDecoration: 'none', color: 'white'}}>Contacto</a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link" style={{textDecoration: 'none', color: 'white'}}>Preguntas Frecuentes</a></li>
                </ul>
                </div>
                <div className="col-md-5 offset-md-1 mb-3">
                <form>
                    <h5 style={{color: 'white'}}>Suscribite al newsletter</h5>
                    <p style={{color: 'white'}}>Enterate de las novedades y ofertas.</p>
                    <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                    <label for="newsletter1" className="visually-hidden" style={{color: 'white'}}>Email</label>
                    <input id="newsletter1" type="text" className="form-control" placeholder="Email"></input>
                    <button className="btn btn-primary" type="button" id="form" style={{color: 'white'}}>Enviar</button>
                    </div>
                </form>
                </div>
            </div>
            <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top" id="ft" style={{color: 'white'}}>
                <p>© 2022 ZION. All rights reserved.</p>
            </div>
        </footer>
    )
}
export default Footer