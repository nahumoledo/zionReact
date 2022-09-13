import React from "react";
import ItemCount from "./ItemCount";
import data from "./mockData";
import { useEffect } from "react";
import Item from "./Item"

function ItemDetail({Item}) {
    return(
        <div>
            {data.map((data) => (
                <div key={data.id}>
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

export default ItemDetail