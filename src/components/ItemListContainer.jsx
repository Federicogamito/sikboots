import React from 'react'
import ItemList from './ItemList'
import './styles/ItemListContainer.css'

const ItemListContainer = () => {
return(

<section className='container-products'>
<h2 className='catalogo'>Catálogo</h2>
    <ItemList />
</section>

);
};

export default ItemListContainer;