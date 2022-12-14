import React from "react";
import ItemList from "../itemList/ItemList";
import { useEffect, useState } from "react";
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore"
import { useParams } from "react-router-dom";


const ItemListContainer = () => {

    const [productList, setProductList] = useState([])
    const { categoryName } = useParams()
    const db = getFirestore()
    const querySnapshot = collection(db, 'items')
        

    const getProducts = () => {
       
       
        if(categoryName) {
            const queryFilter = query(
                querySnapshot,
                where('categoryId', '==', categoryName),
                where('categoryId', '==', 'Buzos'),
                where('categoryId', '==', 'Camperas'),
                where('categoryId', '==', 'Jeans'),
                where('categoryId', '==', 'Remeras'),
            )
            getDocs(queryFilter).then((Response) => {
                const data = Response.docs.map((data) => {
                    return { id: data.id, ...data.data() }
                })
                setProductList(data)
            })
        } else {
            getDocs(querySnapshot).then((Response) => {
                const data = Response.docs.map((data) => {
                    return { id: data.id, ...data.data() }
                })
                setProductList(data)
            })
        }
    }
    
    useEffect(() => {
        getProducts()
    }, [categoryName])


    return(
        <div id="productos">
            <ItemList lista={productList}/>
        </div>        
    )
}

export default ItemListContainer