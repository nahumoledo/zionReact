import React from "react"
import { Link } from "react-router-dom"




const Item = ({imageId, price, title, id}) => {
  
    return(
        <div style={{maxWidth: '30%', padding: '10px', marginBottom: '20px', boxShadow: '10px 10px 10px black', textAlign: 'center'}} id='prod'>
            <img width={'400px'} src={`./Img/` + imageId} alt={title} className='img-fluid' />
            <h2 style={{textAlign: 'center'}}>{title}</h2>
            <h3 style={{textAlign: 'center', fontSize: '15px'}}>${price}</h3>
            <Link to={`/item/${id}`} style={{display: 'inline-block', margin: '0 auto', textAlign: 'center !important'}}>
                <button className="button">Ver detalles</button>
            </Link>
        </div>
    )
}
export default Item