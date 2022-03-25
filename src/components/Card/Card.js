import React,{ useState } from 'react'
import './Card.css'
import ItemCount from '../ItemCount/ItemCount';


export default function Card({ data }) {
    const { title, price, stock} = data 
    const [ count, setCount ] = useState(50);

    console.log("contador: ", count);
    console.log("Ultimo click: ", new Date());

    return(
     <div className="card-item">
        <h2>{title}</h2>
        <p>{price}</p>
        <ItemCount stock={stock} />
        <p></p>
        <button>Agregar al carrito</button>
    </div>
)
}