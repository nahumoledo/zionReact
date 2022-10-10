import { NavLink } from "react-router-dom"
import React from "react"


const Item = ({nombre, precio, img, id}) => {
    return(
        <div>
            <img width={'200px'} src={`./Img/{imageId}`} alt={nombre} />
            <h2>{nombre}</h2>
            <h3>{precio}</h3>
        </div>
    )
}
export default Item