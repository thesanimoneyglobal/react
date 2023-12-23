import {useEffect, useState} from "react";

export default function Incrementor() {
    const [count, setCount] = useState(0)

    useEffect(()=> {
        console.log('Count Data', count)
    }, [count])

    return <>
        <div className={'mb-3'}>Count: {count}</div>
        <button onClick={()=> setCount(count + 1)} className={'btn btn-primary me-2'}>Increment</button>
        <button onClick={()=> setCount(count - 1)} className={'btn btn-primary'}>Decrement</button>
    </>
}

