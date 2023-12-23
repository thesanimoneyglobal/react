import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css'
import '../src/App.css'
import Restoraunt from "../components/Restoraunt.tsx";
// import Alert from "../components/Alert.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <Restoraunt/>
  </React.StrictMode>,
);