import Item from "../Item"
import React from "react"



const ItemList = ({lista}) => {

    return(
        <div>
            {lista.map((product) => (
                   <Item key={product.id} product={product}/>
            ))}
        </div>   
     )
}

export default ItemList