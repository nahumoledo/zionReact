import React from "react";
import data from "./mockData";
import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import {useParams} from 'react-router-dom'
import { getFirestore, doc, getDoc } from "firebase/firestore"


const getProducts = new Promise((resolve, reject) => {
    setTimeout(()=> {
        resolve(data)
    }, 2000)
})

function ItemDetailContainer() {
    const [producto, setProducto] = useState([]);
    const {id} = useParams()
    const db = getFirestore()
    const queryDoc = doc(db, 'items', 'nHq04SjFY01Qb8tZA6yb')
    getDoc(queryDoc).then((res) => {
        console.log(res.data())
    })


    useEffect(() => {
        getProducts.then((res)=>{ 
            const myProd = res.find(p => p.id === id) 
                setProducto(myProd) 
        })
    }, [])

    return(
        <>
            <ItemDetail data={producto}/>
        </>
    )
}

export default ItemDetailContainer