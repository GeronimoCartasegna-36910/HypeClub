const ItemDetail = ({ item }) =>{
    return(
        <div className="item__container">
            <div className="item__img">
               <img class="item__img" src={item.img} alt=""/>
            </div>
            <div className="item__info">
                <h3 className="item__info--title">{item.nombre}</h3>
                <p className="item__info--description">{item.description}</p>
                <div className="item__info--down">
                <p className="item__info--size">Talle:{item.talle}</p>
                <p className="item__info--price">${item.precio}</p>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail