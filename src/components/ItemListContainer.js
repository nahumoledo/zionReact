import { render } from "@testing-library/react";
import React from "react";

const ItemListContainer = ({name}) => {
        return(
            <h1>Proximamente: nueva linea de {name}</h1>
        )
}
render(<ItemListContainer name="ropa" />, document.getElementById('root'))