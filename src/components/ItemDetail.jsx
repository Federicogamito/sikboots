import React,{useState, useEffect} from 'react'
import './styles/ItemDetail.css'
import ItemCount from './ItemCount';



const ItemDetail = ({ item }) => {
    const onAdd = (qty) => {
      alert(`Has agregado ${qty} correctamente!`);
    };
  
    console.log(item);
    return (
      <article className="product-detail">
        <img className='imagen-detail' src={item.image} alt="" />
        <div className="product-detail-info">
          <h2 className="title">{item.title}</h2>
          <p className="description">{item.description}</p>
          <ul className="infoprice">
            <li>Price:</li>
            <li>${item.price}</li>
          </ul>
          <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
        </div>
      </article>
    );
  };
  
  export default ItemDetail;
