import { useState } from "react"
import { useEffect } from "react"
import { useParams } from "react-router-dom";
import Producto from "./Producto"
import customFetch from "../utils/customFech"
const  {data} = require("../utils/data")

const ItemListContainer = () =>{
    const [datos, setDatos] = useState([])
    const {idCategory} = useParams()

    useEffect(()=>{
        if (idCategory){
            customFetch(1000, data.filter(item => item.idCategory === parseInt(idCategory)))
            .then(datos => setDatos(datos))
            .catch(err => console.log(err))
        } else {
            customFetch(1000, data)
            .then(datos => setDatos(datos))
            .catch(err => console.log(err))
        }
    }, [idCategory])


    return(
        <div className="container__card">
            {
                datos.length ?
                datos.map(item => (
                    <Producto 
                    key={item.id}
                    id={item.id}
                    nombre={item.nombre}
                    precio={item.precio}
                    talle={item.talle}
                    img={item.img}                    
                    />
            ))
            : <p>cargando....</p>
            }
        </div>
    )
}

export default ItemListContainer