import React,{ useState } from 'react'
import './styles/Item.css'
import ItemCount from './ItemCount.jsx';


const Item = (item) => {
    const onAdd = (qty) => {
      alert(`Has agregado ${qty} correctamente!`);
    };
  
    return (
      <article className="card-item">
        <img className="imagencatalogo" src={item.image} alt="" />
        
    
        <h3 className="titulo-card">{item.title}</h3>

        <p className="precio-card">${item.price} </p>

        <ItemCount stock={item.stock} onAdd={onAdd} initial={1} />
    
      </article>
    );
  };


  
  export default Item;
  