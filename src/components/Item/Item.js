import React,{ useState } from 'react'
import './Item.css'
import ItemCount from '../ItemCount/ItemCount';


export default function Card ({ data }) {
    const { title, price, stock, image} = data
    const [ count, setCount ] = useState(50);

    console.log("Ultimo click: ", new Date());
     return(
         <div className="card-item">
         <img className='imagencatalogo' src={`./${image}`} alt={`./${image}`} />

         <div className='container-card-data'>
         <h2 className='tituloCard'>{title}</h2>
         <p className='precioCard'>{price}</p>
         <ItemCount stock={stock}/>
         <p className='stockCard'></p>
         <button>Agregar al carrito</button>
        </div>
    </div>
)
}
