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
        <div className="row col-no-gutter no-top-padding no-bottom-padding no-h-padding full-width row-parent">
            <div className="wpb_column pos-top pos-center align_left column_parent col-lg-7 single-internal-gutter" style={{display: 'flex', padding: '20px', flexDirection: 'column'}}>
                <img width={'800px'} src={`../Img/${data.imageId}`} alt={data.title} className='img-fluid'/>
            </div>
            <div style={{padding: '60px'}} className="wpb_column pos-top pos-center align_left align_left_tablet align_left_mobile column_parent col-lg-5 single-internal-gutter">
                <h2>{data.title}</h2>
                <h3>${data.price}</h3>
                <h4 style={{textDecoration: 'none', fontSize: '20px', fontFamily: 'txt'}}>{data.description}</h4>
                <ItemCount cantProductos={cantProductos} setCantProductos={setCantProductos}/>
                <div style={{textAlign: 'center'}}>
                    <button className="button"  id="prod" onClick={() => onAdd(data, setCantProductos)}>Agregar al Carrito</button>
                </div>
            </div>
        </div>   
     )
}

export default ItemDetail