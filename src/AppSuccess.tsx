import { useEffect, useState, useRef } from "react";
import ReactToPrint from "react-to-print";

interface CoffeData {
  title: string;
  price: number;
  strength?: number;
  taste?: string;
  coffeBean?: string;
  description?: string;
  url?: string;
  count?:number
}

function AppSuccess() {
  const [coffeData, setCoffeData] = useState<CoffeData | null>(null);
  const componentRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const coffe = window.localStorage.getItem('Item');
    coffe && setCoffeData(JSON.parse(coffe));
  }, []); // Empty dependency array to run the effect only once

  return (
    <>
      <h1 className={'mb-3'}>Success Purchase</h1>
      {coffeData && (
        <ul className="list-group" style={{ maxWidth: '25rem' }} ref={componentRef}>
          <li className="list-group-item">Name of Coffe | {coffeData.title}</li>
          <li className="list-group-item">Price | {coffeData.price}</li>
          <li className="list-group-item">Taste | {coffeData.taste}</li>
          <li className="list-group-item">Description | {coffeData.description}</li>
        </ul>
      )}
      <div>
        <ReactToPrint
          trigger={() => (
            <button className={'btn btn-secondary mt-3'}>Print Check</button>
          )}
          content={() => componentRef.current}
          documentTitle={'Check'}
          pageStyle="print"
        />
      </div>
    </>
  );
}

export default AppSuccess;
