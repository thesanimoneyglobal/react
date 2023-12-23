/*
import {useEffect, useState} from "react";
import data from '../components/data.tsx'
function App() {
    const [order, setOrder] = useState(false);
    const [drink, setDrink] = useState(data)

    const handleClickAmericano = () => {
        setDrink(
            {
                ...data,
                title: 'Americano',
                price: 5,
                taste: 'Good',
                description: 'Americano such a nasty with deep tase coffe',
                url: '../src/assets/Americano-ChristinaDibernardo-Unsplash.jpg'
            });

    }

    const handleClickCappuccino = () => {
        setDrink(
            {
                ...data,
                title: 'Cappuccino',
                taste: 'Great',
                price: 6,
                description: 'Cappuccino has light and slightly sweet taste',
                url: '../src/assets/cappuccino.jpeg'
            });
    }

      useEffect(() => {
            window.localStorage.setItem('CoffeType', JSON.stringify(drink))
        }, [drink])



    return <>
        <div>
            <button onClick={handleClickAmericano} className={'btn btn-primary me-3'}>Americano</button>
            <button onClick={handleClickCappuccino} className={'btn btn-secondary'}>Cappuccino</button>
        </div>

        <div className="card mt-3 mb-4" style={{maxWidth: '18rem'}}>
            <img src={drink.url} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{drink.title}</h5>
                <p className="card-text">{drink.description}</p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Price: ${drink.price}</li>
                <li className="list-group-item">Taste: {drink.taste}</li>
                <li className="list-group-item">Coffe Bean: {drink.coffeBean}</li>
            </ul>
            <div className="card-body" onClick={()=> setOrder(true)}>
                <a href="../success.html" target={"_blank"} className="btn btn-primary px-3">Order</a>
            </div>
        </div>

        {order && <div className="alert alert-success alert-dismissible fade show" role="alert" style={{maxWidth: '18rem'}}>
            <strong>Congrats!</strong> You have ordered your {drink.title}.
            <button onClick={()=> setOrder(false)} type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>}
    </>
}

export default App*/
