import './Card.css'
export default function Card({price, title, img}) {
    return(
     <div className="card-item">
        <h2>{title}</h2>
        <p>{price}</p>
        <button> Comprar </button>
    </div>
)
}