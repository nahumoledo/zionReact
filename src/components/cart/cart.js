import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext, CartProvider, removeItem } from "../../context/cartContext";
import {collection, addDoc, getFirestore} from 'firebase/firestore'
import moment from 'moment'

const Cart = () => {
    const { cart, removeItem } = useContext(CartContext)

    const createOrder = () => {
        const db = getFirestore()
        const order = {
            buyer: {
                name: 'Nahuel',
                phone: '1169610161',
                email: 'moledonahu@gmail.com'
            },
            items: cart,
            total: cart.reduce((valorPasado, valorActual) => valorPasado + (valorActual.price * valorActual.quantity), 0),
            date: moment().format(),
        }
        const query = collection(db, 'orders')
        addDoc(query, order)
        .then(({id}) => {
            console.log(id)
            alert('Gracias por tu compra!')
        })
        .catch(() => alert('Tu compra no pudo ser procesada, intenta de nuevo'))
    }
    
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
            <div>
                <button onClick={createOrder}>Crear Orden</button>
            </div>
        </div>
    )
} 
export default Cart