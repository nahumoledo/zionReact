import { render } from "@testing-library/react";
import React from "react";
import ItemCount from "./ItemCount";

const ItemListContainer = ({name}) => {
        return(
            <div>
                <h1>Proximamente: nueva linea de {name}</h1>
                <ItemCount />
            </div>
        )
}
render(<ItemListContainer name="ropa" />, document.getElementById('root'))