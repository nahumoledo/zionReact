import React from "react";

let ItemCount = ({cantProductos, setCantProductos}) => {
    const stock = 10

    const onAdd = () => {
        if(cantProductos < stock){
            setCantProductos(cantProductos + 1)
            return cantProductos
        } else {
            alert('Superaste el stock disponible')
        }
    } // acá la lógica =› Si mi cantidad de productos (cantProductos) es menor al stock, suma uno a mi state sino no le sumes nada porque ya no tengo stock. (podes deshabilitar el botón, tirar un alert o por ahora un console.10g)
    const restar = () => {
        if(cantProductos > stock){
            setCantProductos(cantProductos - 1)
            return cantProductos
        } else {
            alert('No hay stock')
        }
    } // Si mi cantidad de productos (cantProductos) es mayor a e, resta uno a mi state sino no le restes nada. (podesdeshabilitar el botón, tirar un alert o por ahora un console.10g)
    return(
        <div>
            <p>Cantidad de productos: {stock}</p>
            <div>
                <button onClick={restar} className='buy'> - </button>
                <label> {cantProductos} </label>
                <button onClick={onAdd} className='buy'> + </button>
            </div>
        </div>
    )
}
export default ItemCount







