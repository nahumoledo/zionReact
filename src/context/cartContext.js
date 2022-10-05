import React from "react";
import { createContext, useState } from "react";
import Cart from "../components/cart/cart";

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addToCart = (item, cantidad) => {
        if (isInCart(item.id)) {
            alert('Ya esta en el carrito')
        } else {
            setCart([...cart, {...item, cantidad }])
        }
    } 
    const isInCart = (id) => {
        return cart.some((item) => item.id === id)
    }
    const clear = () => {
        setCart([])
    }
    const removeItem = (data) => {
        let nuevoArreglo = []
        Cart.forEach((Item) =>{
            if(data.id !== data.id){
                nuevoArreglo.push(Item)
            }
        })
        setCart(nuevoArreglo)
    }
    return (
        <CartContext.Provider value={{ cart, addToCart, removeItem}} >
            {children}
        </CartContext.Provider>
    )
}