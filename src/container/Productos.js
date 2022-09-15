import { useState } from "react"
import { useEffect } from "react"
import Producto from "../components/Producto"


const Productos = () =>{
    const [datos, setDatos] = useState([])

    useEffect(()=>{
    const data = [
            {id: 1,
            nombre: "Converse High OG",
            precio: 12000, 
            talle: "45", 
            img: "https://www.tienda.quonam.com.ar/media/catalog/product/cache/d38be127ecf06dfec35606e11d013cfe/9/5/950-157197C-NEGRO_1_20.jpg"},
        
            {id: 2, 
            nombre: "Jordan 1 mid Marien Blue",
            precio: 11200, 
            talle: "38", 
            img: 'https://cdn.shopify.com/s/files/1/0548/7362/0655/products/air-jordan-1-retro-high-og-dark-marina-blue-2-1000_1024x1024@2x.png?v=1643675218'},
        
            {id: 3, 
            nombre: "New Balance 550",
            precio: 15000, 
            talle: "39", 
            img: 'https://sneakernews.com/wp-content/uploads/2022/08/aime-leon-dore-new-balance-550-navy-gold-5.jpg'},
        
            {id: 4, 
            nombre: "Nike Dunk low What The",
            precio: 6000, 
            talle: "37", 
            img: 'https://i0.wp.com/mauespejel.com/wp-content/uploads/2022/04/45776-img_9491.jpg?resize=640%2C326&ssl=1'},
        
            {id: 5, 
            nombre: "Puma classic",
            precio: 6000,
            talle: "43", 
            img: 'https://woker.vtexassets.com/arquivos/ids/199374-800-800?v=637553904066200000&width=800&height=800&aspect=true'},
        
            {id: 6, 
            nombre: "Puma rsx",
            precio: 6000, 
            talle: "35", 
            img: 'http://d3ugyf2ht6aenh.cloudfront.net/stores/001/143/197/products/fb29885a-0480-44c0-9e51-5937021efbde1-2cd03937df66f4de0916125466655199-640-0.jpeg'},
        
            {id: 7, 
            nombre: "Vans Ski-HI",
            precio: 25000, 
            talle: "41", 
            img: 'https://image.goxip.com/5cBr17m3ZtXqWJaWfp1J5LsVSEo=/fit-in/500x500/filters:format(jpg):quality(80):fill(white)/https:%2F%2Fimages.asos-media.com%2Fproducts%2Fvans-sk8-hi-trainers-in-black%2F24150380-1-black%3F$XXL$'},
        
            {id: 8, 
            nombre: "Vans old skool",
            precio: 28000, 
            talle: "39", 
            img: 'https://www.do2padres.com/img/Producto/4eebee2d-ee89-5919-5e46-464955f2d145/WhatsApp-Image-2021-12-22-at-16-27-56-61c37c51e6729.jpg'},
    ];
    setDatos(data)
    }, [])


    return(
        <>
            {
                datos.map(item => (
                    <Producto 
                    key={item.id}
                    nombre={item.nombre}
                    precio={item.precio}
                    talle={item.precio}
                    img={item.img}                    
                    />
                ))
            }
        </>
    )
}

export default Productos