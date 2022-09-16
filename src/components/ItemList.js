import Item from "./Item"
import ItemListContainer from "./ItemListContainer"
import data from "./mockData"


const ItemList = ({lista}) => {

    return(
       <div>
           {lista.map((data) => (
               <div key={data.id}>
                   <Item
                    nombre={data.nombre}
                    precio={data.precio}
                    img={data.img}
                />
               </div>
           ))}
       </div>   
    )
}

export default ItemList