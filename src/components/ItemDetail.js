import React from "react";
import ItemCount from "./ItemCount";
import { useContext, useState } from "react";
import { CartContext } from "../context/cartContext";

function ItemDetail({ data }) {
    const {addToCart} = useContext(CartContext)
    const [cantProductos, setCantProductos] = useState(0) 
    
    function onAdd(data, cantProductos) {
        addToCart(data, cantProductos)
    }
    return(
        <div className="detail-container">
            <img width={'500px'} src={`Img/${data.imageId}`} alt={data.title} />
            <h2>{data.title}</h2>
            <h3>{data.price}</h3>
            <ItemCount cantProductos={cantProductos} setCantProductos={setCantProductos}/>
            <div>
                <button className="add-btn buy" onClick={() => onAdd(data, setCantProductos)}>Agregar al Carrito</button>
            </div>
        </div>   
     )
}

export default ItemDetail