import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import customFetch from "../utils/customFech";
import ItemDetail from "./ItemDetail"
const {data} = require("../utils/data")

const ItemDetailContainer = () => {
    const [dato, setDato] = useState({});
    const { idItem } = useParams();

    useEffect(() => {
        customFetch(2000, data.find(item => item.id === parseInt(idItem)))
            .then(result => setDato(result))
            .catch(err => console.log(err))
    }, [idItem]);
    
    return (
        <ItemDetail item={dato} />
    );
}

export default ItemDetailContainer