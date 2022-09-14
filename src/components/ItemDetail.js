import React from "react";
import ItemCount from "./ItemCount";
import data from "./mockData";
import { useEffect } from "react";
import Item from "./Item"

function ItemDetail() {
    return(
        <div>
            {data.map((data) => (
                <div>
                    <img width={'200px'} src={`./Img/${data.img}`} alt={data.nombre} />
                    <h2>{data.nombre}</h2>
                    <h3>{data.precio}</h3>
                </div>
            ))}
        </div>   
     )
}

export default ItemDetail