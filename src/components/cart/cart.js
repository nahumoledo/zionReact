import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext, removeItem } from "../../context/cartContext";

const Cart = () => {
    const { cart, addToCart, removeItem } = useContext(CartContext)
    return(
        <div>
            <h1>Tu carrito</h1>
            {cart.length === 0 ? (
                <div>
                    <h2>No hay productos</h2>
                    <Link to={"/"}>Volver a comprar</Link>
                </div>

            ) : (
            <div>
                {cart.map((item) => (
                    <div key={item.id} style={{display: "flex", alignItems: "center"}}>
                        <img src={`../Img/${item.imageId}`} width={'100px'} alt={item.title}/>
                        <h3>{item.title}</h3>
                        <p>{item.price}</p>
                        <button onClick={() => removeItem(item.id)}>Eliminar producto</button>
                    </div>
                ))}
            </div>
            )}
        </div>
    )
} 
export default Cart