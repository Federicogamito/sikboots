import carrito from "./carrito.png"
import React,{ useState } from 'react'


const CartWidget = () => {
    return (
        <div>
            <img className="carrito-img" src={ carrito }/>
        </div>
    )
}

export default CartWidget