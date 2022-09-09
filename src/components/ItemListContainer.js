import { render } from "@testing-library/react";
import React from "react";
import ItemCount from "./ItemCount";
import data from "./mockData";
import ItemList from "./ItemList";
import { useEffect, useState } from "react";

const ItemListContainer = () => {

    const [productList, setProductList] = useState([])

    useEffect(() => {
        getProducts.then((response)=>{
            setProductList(response)
        })
    }, [])

    const getProducts = new Promise((resolve, reject) => {
            setTimeout(()=> {
                resolve(data)
            }, 2000)
        })


    return(
        <div>
            <ItemList lista={productList} />
        </div>        
    )
}

export default ItemListContainer