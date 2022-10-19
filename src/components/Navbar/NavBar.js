import { Link, NavLink } from "react-router-dom"
import CartWidget from "../CartWidget"
import React from "react"

function NavBar() {
    return ( 
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <div className="container-fluid">
                <Link to={`/`} className="navbar-brand"  style={{fontFamily: 'title', fontSize: '30px'}}>ZION</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav me-auto mb-2 mb-md-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#"><NavLink style={{textDecoration: 'none', color: 'white'}} to={`/category/Buzos`}>Buzos</NavLink></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><NavLink style={{textDecoration: 'none', color: 'white'}} to={`/category/Camperas`}>Camperas</NavLink></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><NavLink style={{textDecoration: 'none', color: 'white'}} to={`/category/Jeans`}>Jeans</NavLink></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><NavLink style={{textDecoration: 'none', color: 'white'}} to={`/category/Remeras`}>Remeras</NavLink></a>
                        </li>
                    </ul>
                    <CartWidget />
                </div>
            </div>
        </nav>
    )

}

export default NavBar