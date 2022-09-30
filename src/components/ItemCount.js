import { render } from "@testing-library/react";
import { Component, useState} from 'react';
import React from "react";

let ItemCount = ({cantProductos, setCantProductos}) => {
    const stock = 5 // mi stock va ser 5 o lo que quieras
    const onAdd = () => {
        if(cantProductos < stock){
            setCantProductos = (cantProductos + 1)
            return cantProductos
        }
    } // acá la lógica =› Si mi cantidad de productos (cantProductos) es menor al stock, suma uno a mi state sino no le sumes nada porque ya no tengo stock. (podes deshabilitar el botón, tirar un alert o por ahora un console.10g)
    const restar = () => {
        if(cantProductos > 0){
            setCantProductos = (cantProductos - 1)
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
            <div>
                <button className="add-btn" onClick={() => onAdd(cantProductos)}>
                    Agregar al carrito
                </button>
            </div>
        </div>
    )
}
export default ItemCount







