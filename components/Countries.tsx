interface Props {
    header: string,
    title: string,
    text: string
}

const data: Props[] = [
    {header: 'Japan', title: 'Tokyo', text: 'Visit Tokyo with your best friends'},
    {header: 'Germany', title: 'Berlin', text: `Visit Berlin with your best friends`},
    {header: 'Spain', title: 'Madrid', text: `Visit Madrid with your best friends`},
    {header: 'France', title: 'Paris', text: `Visit Paris with your best friends`},
]

function Countries({header, title, text}: Props) {

    return <div className="col-sm-6 mb-3 mb-sm-3">
        <div className="card">
            <h5 className="card-header">{header}</h5>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{text}</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    </div>
}

const CountryList = () => (
    <div className={'row'}>
        {data.map((country, index) => (
            <Countries key={index} {...country} />
        ))}
    </div>
);

export default CountryList;