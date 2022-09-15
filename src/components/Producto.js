const Producto = ({nombre,precio, talle, img}) =>{
    return(
        <div className="container__card container">
            <div className="container__img">
               <img class="img_item" src={img} alt=""/>
            </div>
            <div className="container__info">
                <h3 className="container__info--title">{nombre}</h3>
                <p className="container__info--size">Talle:{talle}</p>
                <p className="container__info--price">${precio}</p>
                <button className="button__info">Ver Más</button>
            </div>
        </div>
    )
}

export default Producto