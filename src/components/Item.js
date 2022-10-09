import { NavLink } from "react-router-dom"
import React from "react"


const Item = ({nombre, precio, img, id}) => {
    return(
        <div><NavLink to={`/item/${id}`}>
            <img width={'200px'} src={`./Img/${img}`} alt={nombre} />
            <h2>{nombre}</h2>
            <h3>{precio}</h3>
        </NavLink>
        </div>
    )
}
export default Item