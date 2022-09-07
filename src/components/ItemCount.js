import { render } from "@testing-library/react";
import { Component, useState } from 'react';

import React from "react";

let ItemCount = () => {
    const [cantProductos, setCantProductos] = useState(0) // mi state comienza en 0
    const stock = 5 // mi stock va ser 5 o lo que quieras
    const onAdd = () => {
        if(cantProductos < stock){
            cantProductos = (cantProductos + 1)
            return cantProductos
        }
    } // acá la lógica =› Si mi cantidad de productos (cantProductos) es menor al stock, suma uno a mi state sino no le sumes nada porque ya no tengo stock. (podes deshabilitar el botón, tirar un alert o por ahora un console.10g)
    const restar = () => {
        if(cantProductos > stock){
            cantProductos = (cantProductos - 1)
            return cantProductos
        }
    } // Si mi cantidad de productos (cantProductos) es mayor a e, resta uno a mi state sino no le restes nada. (podesdeshabilitar el botón, tirar un alert o por ahora un console.10g)
    return(
        <div>
            <p>Cantidad de productos: {stock}</p>
            <div>
                <button onClick={restar}> - </button>
                <label>{cantProductos}</label>
                <button onClick={onAdd}> + </button>
            </div>
        </div>
    )
}
export default ItemCount







