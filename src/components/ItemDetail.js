import React from "react";
import ItemCount from "./ItemCount";
import { useContext, useState } from "react";
import { CartContext } from "../context/cartContext";

function ItemDetail({ data }) {
    const {addToCart} = useContext(CartContext)
    const [cantProductos, setCantProductos] = useState(0) 

    function onAdd(data, cantidad) {
        addToCart(data.item, cantidad)
    }
    return(
        <div className="detail-container">
            <img width={'500px'} src={`./proyecto-app/src/Img/${data.img}`} alt={data.nombre} />
            <h2>{data.nombre}</h2>
            <h3>{data.precio}</h3>
            <ItemCount cantProductos={cantProductos} setCantProductos={setCantProductos}/>
            <div>
                <button className="add-btn" onClick={() => onAdd(data)}>Agregar al Carrito</button>
            </div>
        </div>   
     )
}

export default ItemDetail