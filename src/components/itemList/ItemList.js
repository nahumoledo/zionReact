import Item from "../Item"
import React from "react"



const ItemList = ({lista}) => {

    return(
        <div style={{maxWidth: '1400px', margin: '60px auto', display: 'flex', justifyContent: 'space-between', flexDirection: 'row-reverse', flexWrap: 'wrap'}}>
            {lista.map((product) => (
                   <Item key={product.id} imageId={product.imageId} price={product.price} title={product.title} id={product.id}/>
            ))}
        </div>   
     )
}

export default ItemList