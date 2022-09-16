import React from "react";
import data from "./mockData";
import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";

const getProducts = new Promise((resolve, reject) => {
    setTimeout(()=> {
        resolve(data)
    }, 2000)
})

function ItemDetailContainer() {
    const [producto, setProducto] = useState([]);
    const id = 3

    useEffect(() => {
        getProducts.then((res)=>{ 
            const myProd = res.find(p => p.id === id) 
                setProducto(myProd) 
        })
    }, [])

    return(
        <>
            <ItemDetail producto={producto}/>
        </>
    )
}

export default ItemDetailContainer