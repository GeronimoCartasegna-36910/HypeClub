import { Link } from "react-router-dom"

const Producto = ({id,nombre,precio, talle, img}) =>{
    return(
        <div className="container">
            <div className="container__img">
               <img class="img_item" src={img} alt=""/>
            </div>
            <div className="container__info">
                <h3 className="container__info--title">{nombre}</h3>
                <p className="container__info--size">Talle:{talle}</p>
                <p className="container__info--price">${precio}</p>
                <button className="button__info"><Link to={`/item/${id}`}>Ver Más</Link></button>
            </div>
        </div>
    )
}

export default Producto