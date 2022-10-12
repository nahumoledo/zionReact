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
                        <img src={item.img} width={'100px'} alt={item.nombre}/>
                        <h3>{item.nombre}</h3>
                        <p>{item.precio}</p>
                        <button onClick={() => removeItem(item.id)}>Eliminar producto</button>
                    </div>
                ))}
            </div>
            )}
        </div>
    )
} 
export default Cart