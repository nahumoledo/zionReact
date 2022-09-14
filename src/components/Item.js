const Item = ({nombre, precio, img}) => {
    return(
        <div>
            <img width={'200px'} src={`../Img/${img}`} alt={nombre} />
            <h2>{nombre}</h2>
            <h3>{precio}</h3>
        </div>
    )
}
export default Item