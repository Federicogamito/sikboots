import React,{useState, useEffect} from 'react'
import Item from "./Item" 
import './styles/ItemList.css'
import { getAllProductsFromDB } from '../helpers/getData.js';

const ItemList = () => {
    const [products, setProducts] = useState([]);
  
    useEffect(() => {
      getAllProductsFromDB(setProducts);
    }, []);
  
    return (
      <div className="catalogo">
        {products.length ? (
          <>
            {products.map((product) => {
              return (
                <div key={product.id}>
                  <Item
                    name={product.title}
                    thumbnail={product.image}
                    price={product.price}
                    stock={product.stock}
                    id={product.id}
                  />
                </div>
              );
            })}
          </>
        ) : (
          <p>Cargando productos...</p>
        )}
      </div>
    );
  };
  
  export default ItemList;