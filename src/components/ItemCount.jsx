import React,{ useState } from 'react'
import './styles/ItemCount.css';

const ItemCount = ({ initial, stock, onAdd }) => {
    //hook de estado
    const [qty, setQty] = useState(initial);
  
    const addProduct = (num) => {
      setQty(qty + num);
    };
  
    return (
      <div className="count-container">
        <div className="count-container-cont">
          <button
            className="count-container-btn"
            onClick={() => addProduct(-1)}
            disabled={qty === initial ? true : null}
          >
            -
          </button>


          <span className="count-qty">{qty}</span>
          <button
            className="count-container-btn"
            onClick={() => addProduct(+1)}
            disabled={qty === stock ? true : null}
          >
            +
          </button>
        </div>
  
        <button
          className="button-primary"
          onClick={() => onAdd(qty)}
          disabled={stock === 0 ? true : null}
        >Comprar
        </button>
      </div>

    );
  };
  
  export default ItemCount;
  