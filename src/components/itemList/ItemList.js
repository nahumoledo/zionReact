import Item from "../Item"
import ItemListContainer from "../itemListContainer/ItemListContainer"
import data from "../mockData"
import React from "react"
import { NavLink } from "react-router-dom"


const ItemList = ({lista}) => {

    return(
       <div>
           {lista.map((data) => (
               <div key={data.id} id="prod">
                   <Item
                    nombre={data.nombre}
                    precio={data.precio}
                    img={data.img}
                />
               </div>
           ))}
       </div>   
    )
}

export default ItemList