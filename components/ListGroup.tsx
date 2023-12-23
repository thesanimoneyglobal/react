import Alert from "./Alert.tsx";
import {useState} from "react";


interface Props {
    items: string[],
    title: string
}
function ListGroup(props: Props) {
    const [selectedIndex, setSelectedIndex] = useState(-1)
    const getMessage = () => {
        return props.items.length === 0 && Alert;
    }

    return <>
        {getMessage()}
        <h2>{props.title}</h2>
        <ul className="list-group mb-5">
            {props.items.map((item, index) =>
                <li
                key={item}
                className={selectedIndex === index ? 'list-group-item active' : 'list-group-item'}
                onClick={() => {setSelectedIndex(index)}}>
                    {item}</li>)}
        </ul>
    </>
}

export default ListGroup