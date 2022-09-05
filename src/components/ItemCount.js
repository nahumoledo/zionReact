import { render } from "@testing-library/react";
import React from "react";

function addOne(number){
    let a = Number(number)
    let b = 1 + a
    return b
}
let number = 1


let ItemCount = () => {
    
    return(
        <div>
            <div>{addOne.b}</div>
            <button onClick={addOne}>Agregar</button>
        </div>
    )
}

export default ItemCount







