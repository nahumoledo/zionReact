import React from "react";
import ItemCount from "./ItemCount";
import data from "./mockData";
import { useEffect } from "react";
import ItemDetail from "./ItemDetail";

const getProducts = new Promise((resolve, reject) => {
    setTimeout(()=> {
        resolve(data)
    }, 2000)
})

function ItemDetailContainer() {
    useEffect(() => {
        getProducts()
    }, [])

    return(
        <>
            <ItemDetail />
        </>
    )
}

export default ItemDetailContainer