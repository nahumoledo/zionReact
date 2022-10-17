import React from "react";
import ItemCount from "./ItemCount";
import { useContext, useState } from "react";
import { CartContext } from "../context/cartContext";
import { toast, ToastContainer } from 'react-toastify';


function ItemDetail({ data }) {
    const {addToCart} = useContext(CartContext)
    const [cantProductos, setCantProductos] = useState(0) 
    
  
    function onAdd(data, cantProductos) {
        addToCart(data, cantProductos)
        
    }
    return(
        <div className="col-2">
            <div className="col" style={{display: 'flex', padding: '20px', flexDirection: 'column'}}>
                <img width={'500px'} src={`../Img/${data.imageId}`} alt={data.title} />
            </div>
            <div className="col">
                <h2>{data.title}</h2>
                <h3>${data.price}</h3>
                <h4>{data.description}</h4>
            </div>
            <div>
                <ItemCount cantProductos={cantProductos} setCantProductos={setCantProductos}/>
                <button className="add-btn buy" onClick={() => onAdd(data, setCantProductos)}>Agregar al Carrito</button>
            </div>
        </div>   
     )
}

export default ItemDetail