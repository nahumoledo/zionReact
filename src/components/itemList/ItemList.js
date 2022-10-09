import Item from "../Item"
import React from "react"
import { Link } from "react-router-dom"


const ItemList = ({lista}) => {

    return(
        <div>
            {lista.map((data) => (
                <div key={data.id} id="prod">
                   <Link to={'/item/' + data.id}> 
                   <Item
                     nombre={data.nombre}
                     precio={data.precio}
                     img={data.img}
                 />
                   </Link>
                </div>
            ))}
        </div>   
     )
}

export default ItemList