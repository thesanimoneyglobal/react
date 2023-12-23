// import {useState} from "react";
//
//
// function AppSecond() {
//
//     const  [offcanvas, setOffcanvas] = useState(false)
//     let styleOffcanvas = 'offcanvas offcanvas-start show'
//
//     if (!offcanvas) {
//         styleOffcanvas = 'offcanvas offcanvas-start'
//     }
//
//         return <>
//             <Button text={'Go'} onClick={()=> setOffcanvas(true)}/>
//
//             <div className={styleOffcanvas} tabIndex={1} id="offcanvas" aria-labelledby="offcanvasLabel">
//         <div className="offcanvas-header">
//             <h5 className="offcanvas-title" id="offcanvasLabel">Off canvas</h5>
//             <button onClick={() => setOffcanvas(false)} type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
//         </div>
//         <div className="offcanvas-body">
//             Content for the off canvas goes here. You can place just about any Bootstrap component or custom elements
//             here.
//         </div>
//     </div>
//         </>
// }
//
// export default AppSecond