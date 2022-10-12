import Item from "../Item"
import React from "react"



const ItemList = ({lista}) => {

    return(
        <div>
            {lista.map((product) => (
                   <Item key={product.id} imageId={product.imageId} price={product.price} title={product.title} id={product.id}/>
            ))}
        </div>   
     )
}

export default ItemList