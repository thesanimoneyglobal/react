import drinks, {dishes, special} from "./data.tsx";
import {useEffect, useState} from "react";

function Restoraunt() {
    const brand = 'MiniResto';
    const headerList = ['drinks', 'dishes', 'special'];

    interface MenuItem {
        title: string;
        price: number;
        strength?: number;
        taste?: string;
        coffeBean?: string;
        description?: string;
        url?: string;
        count: number
    }

    interface MenuItems {
        [key: string]: MenuItem[];
    }

    const menuItems: MenuItems = {
        drinks: drinks,
        dishes: dishes,
        special: special
    }

    const [isActive, setActive] = useState(false);
    const [item, setItemMenu] = useState('drinks');
    const [count, setCount] = useState<{ [key: string]: number }>({});

    const handleIncrease = (itemMenu: MenuItem) => {
        setCount((prevCounts) => ({
            ...prevCounts,
            [itemMenu.title]: (prevCounts[itemMenu.title] || 0) + 1,
        }));
        console.log(itemMenu)
    };

    const handleDecrease = (itemMenu: MenuItem) => {
        setCount(prevCounts => ({
            ...prevCounts,
            [itemMenu.title]: Math.max((prevCounts[itemMenu.title] || 0) - 1, 0)
        }));
    }

    const handleButton = () => {
        setActive(!isActive);
    };
    const handleClick = (item: MenuItem) => {
        localStorage.setItem('Item', JSON.stringify(item))
        window.location.href = '/success';
    }

    useEffect(()=> {
        console.log(count)
    })

    return <>
        <nav className="navbar navbar-expand-lg bg-body-secondary rounded header mb-5">
            <div className="container-fluid ">
                <a className="navbar-brand fw-bold" href="#">
                    {brand}
                </a>
                <button
                    onClick={() => handleButton()}
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={isActive ? "navbar-collapse" : "collapse navbar-collapse"} id="navbarNav">
                    <ul className="navbar-nav">
                        {headerList.map((item) => (
                            <li onClick={() => setItemMenu(item)} key={item} className={"nav-item"}>
                                <button
                                    className={"nav-link"}>
                                    {item}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>

        <h2>You have selected {item}</h2>
        {menuItems[item].map((itemMenu, index) => (
            <div key={index} className="card mt-3 mb-4" style={{maxWidth: '18rem'}}>
                <img src={itemMenu.url} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{itemMenu.title}</h5>
                    <p className="card-text">{itemMenu.description}</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Price: {count[itemMenu.title] > 1 ? itemMenu.price * count[itemMenu.title]: itemMenu.price}</li>
                    <li className="list-group-item">Taste: {itemMenu.taste}</li>
                </ul>
                <div className="card-body">
                    <span className={'mb-3'}>Count: {count[itemMenu.title] !== undefined ? count[itemMenu.title] : 0}</span>
                    <button onClick={() => handleIncrease(itemMenu)}
                            className={'btn btn-secondary me-2 btn-increase'}>+
                    </button>
                    <button disabled={(count[itemMenu.title] || 0) === 0} onClick={() => handleDecrease(itemMenu)}
                            className={'btn btn-secondary'}>-
                    </button>
                    <button disabled={(count[itemMenu.title] || 0) === 0} onClick={() => handleClick(itemMenu)}
                            className="btn btn-primary btn-order px-3">Order
                    </button>
                </div>
            </div>
        ))}
    </>
}

export default Restoraunt;
