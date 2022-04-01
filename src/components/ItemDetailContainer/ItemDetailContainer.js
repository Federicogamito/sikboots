import React,{useState, useEffect} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {
const mockProductsDetail = [{
    id: 1,
    title:'Air Force 1 X UNDEFEATED',
    price: 25499,
    image: 'af1xundefeat.jpg',
    stock: 10
},
{
    id:2,
    title:'Air Force 1 07',
    price: 35499,
    image: 'airforce107.jpg',
    stock: 25 
},
{
    id:3,
   title:'Air Max 90 NRG',
    price: 20999,
    image: 'airmax90.jpg',
    stock: 30
},
{
    id:4,
    title:'Nike Dunk HI 1985',
    price: 35000,
    image: 'dunkhi.jpg',
    stock: 10
},
{
    id:5,
    title:'Nike Dunk Low SE',
    price: 29999,
    image: 'dunklow.jpg',
    stock: 20
},
{
    id:6,
    title:'Air Jordan 5 Retro ORANGE BLAZE',
    price: 25499,
    image: 'jordanorangeblaze1.jpg',
    stock: 17
},
{
    id: 7,
    title:'Air Jordan 1 High SEAFOAM',
    price: 20000,
    image: 'jordan1seafoam.jpg',
    stock: 20
},
{
    id: 8,
    title:'Nike LDWaffle x Sacai',
    price: 50000,
    image: 'ldwaffle.jpg',
    stock: 20
}]

const [Item, setItem] = useState ([])

const getItem = () => {
    return new Promise ((resolve, reject) => {
        return resolve(mockProductsDetail)
    })
}

useEffect ( () => {
    getItem().then ( (data) => {
        setItem(data)
    })
}, [])

return (
    <div className='container-detail'>
     {Item.map( (item) => {
        const { id } = item
         return(
             <ItemDetail data={item} key={id}/>
         ) 
     })}
    </div>
 )
}

export default ItemDetailContainer;