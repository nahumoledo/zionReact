import React from "react";
import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import {useParams} from 'react-router-dom'
import { getFirestore, doc, getDoc } from "firebase/firestore"



function ItemDetailContainer() {
    const [producto, setProducto] = useState([]);
    const {id} = useParams()
    const db = getFirestore()
    
    const traerItemFb = () =>{ // hago la lógica para traerme los datos de la colección dentro de una función
        const queryDoc = doc(db, 'items', id) // acá no hardcodeamos un id sino que traemos el recibido por params
        getDoc(queryDoc).then((res) => {
            setProducto({id: res.id, ...res.data()})
    })
    }

    useEffect(() => { 
        traerItemFb()
    }, [id])

    return(
        <>
            <ItemDetail data={producto}/>
        </>
    )
}


export default ItemDetailContainer