interface Props {
    id: number,
    name: string,
    price: string
}

const courses: Props[] = [
    {
        id: 0,
        name: 'Full Stack Developement Program',
        price: '89,999'

    },
    {
        id: 1,
        name: 'Python Automation Testing Program',
        price: '64,999'
    },
    {
        id: 2,
        name: 'UI/UX Program',
        price: '89,999'
    }
]

function Programmers() {
    return courses.map(item => (
        <div className="card mb-3" style={{ width: '18rem' }} key={item.id}>
            <div className="card-body">
                <h5 className="card-title">{item.id} and price is {item.price}</h5>
                <p className="card-text">{item.name}</p>
                <a href="#" className="btn btn-primary">Buy</a>
            </div>
        </div>
    ));
}

export default Programmers;