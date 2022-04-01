import React,{useState, useEffect} from 'react'
import Item from "../Item/Item"
import ItemList from '../ItemList/ItemList'
import './ItemListContainer.css'

const ItemListContainer = () => {
return(

<section className='container-products'>
<h2 className='catalogo'>Catálogo</h2>
    <ItemList />
</section>

)
}

export default ItemListContainer;