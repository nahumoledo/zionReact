import React from "react"
import { Link } from "react-router-dom"




const Item = ({imageId, price, title, id}) => {
  
    return(
        <div>
            <img width={'200px'} src={`./Img/` + imageId} alt={title} />
            <h2>{title}</h2>
            <h3>{price}</h3>
            <Link to={`/item/${id}`}>
                <button>Ver detalles</button>
            </Link>
        </div>
    )
}
export default Item
