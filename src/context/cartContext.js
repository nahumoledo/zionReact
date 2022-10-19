import React from "react";
import { createContext, useState } from "react";

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addToCart = (item, cantidad) => {
        if (isInCart(item)) {
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
    const removeItem = (data, event) => {
        let nuevoArreglo = []
        nuevoArreglo.forEach((Item) =>{
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