import Card from "../Card/Card"

const ItemListContainer = () => {

    return(
        <div className="container-cards">
            <h2 className="container-products">Catálogo</h2>
            <Card title={"Air Force 1 X UNDEFEATED"} price={"25,499"} />
            <Card title={"Air Force 1 '07"} price={"35,499"} />
            <Card title={"Air Max 90 NRG"} price={"20,999"} />
            <Card title={"Nike Dunk HI 1985"} price={"35,000"} />
            <Card title={"Nike Dunk Low SE"} price={"29,999"}/>
            <Card title={"Air Jordan 5 Retro ORANGE BLAZE"} price={"25,499"} />
            <Card title={"Air Jordan 1 High SEAFOAM"} price={"20,000"} />
            <Card title={"Air Jordan 1 Retro High OG"} price={"40,499"} />
            <Card title={"Air Jordan 6 Retro GOLD HOOPS"} price={"30,499"} />
            <Card title={"LDWaffle x sacai X CLOT"} price={"45,000"} />
            <Card title={"Lebron VIII SPACE JAM"} price={"49,999"} />
        </div>
    )
}


export default ItemListContainer;