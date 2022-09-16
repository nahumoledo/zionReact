import { NavLink } from "react-router-dom"
import data from "./mockData"

const Item = ({nombre, precio, img}) => {
    return(
        <div><NavLink to={`/item/:id`}>
            <img width={'200px'} src={`./Img/${img}`} alt={nombre} />
            <h2>{nombre}</h2>
            <h3>{precio}</h3>
        </NavLink>
        </div>
    )
}
export default Item