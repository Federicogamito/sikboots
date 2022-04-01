import React,{useState, useEffect} from 'react'
import './ItemDetail.css'
import ItemList from '../ItemList/ItemList'
import Item from '../Item/Item'



export default function ItemDetail ({item}) {
    const { title, price, image} = item
    return(
        <section className='sectionDetailProduct'>
    <div>
        <img className='imageDetail' src={`./${image}`} alt={`./${image}`} />
    </div>

    <div>
        <p>Descripcion: ........</p>
    </div>

    <div>
        <h2 className='titleDetail'>{title}</h2>
    </div>

    <div>
        <p className='priceDetail'>{price}</p>
    </div>
   
    <div>
       <button>Comprar</button>
    </div>

</section>
    )
}
