import React,{useState} from 'react'
import Card from "../Card/Card"


const ItemListContainer = () => {
const [showCard, setShowCard] = useState(true);

    let dataProduct = {
        title:'Air Force 1 X UNDEFEATED',
        price:25499,
        stock: 10,
    }

    let dataProduct1 = {
        title:'Air Force 1 07',
        price:35499,
        stock: 25, 
    }

    let dataProduct2 = {
       title:'Air Max 90 NRG',
        price:20999,
        stock: 30,
    }

    let dataProduct3 = {
        title:'Nike Dunk HI 1985',
        price:35000,
        stock: 10,
    }

    let dataProduct4 = {
        title:'Nike Dunk Low SE',
        price:29999,
        stock: 20,
    }
    
    let dataProduct5 = {
        title:'Air Jordan 5 Retro ORANGE BLAZE',
        price:25499,
        stock: 17,
    }


    let dataProduct6 = {
        title:'Air Jordan 1 High SEAFOAM',
        price:20000,
        stock: 20,
    }


    return (
        <div className="container-cards">
        <h2 className="container-products">Catálogo</h2>
        {showCard && <Card data={dataProduct}/>}
        {showCard && <Card data={dataProduct1}/>}
        {showCard && <Card data={dataProduct2}/>}
        {showCard && <Card data={dataProduct3}/>}
        {showCard && <Card data={dataProduct4}/>}
        {showCard && <Card data={dataProduct5}/>}
        {showCard && <Card data={dataProduct6}/>}
        </div>
    )
}


export default ItemListContainer;



