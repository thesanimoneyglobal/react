// // import {useState} from "react";
// //
// interface Data {
//     title: string,
//     age: number
// }
//
// const obj: Data[] = [
//     {title: 'sassha', age: 0},
//     {title: 'Kolya', age: 0},
// ];
//
//
// function Alert() {
//     // const [data, setData] = useState(0)
//     const handleAdd = (obj: Data) => {
//         // setData(data + 1);
//         obj.age += 1;
//     }
//
//
//     return <>
//         {obj.map((item, index) =><div key={index}>
//             <ul>
//                 <li>{item.title}</li>
//                 <li>{item.age}</li>
//             </ul>
//             <button onClick={()=>handleAdd(item)} className={'btn btn-secondary mx-2'}>Add</button>
//             <button className={'btn btn-secondary'}>Decrease</button>
//         </div> )}
//
//     </>
// }
// export default Alert