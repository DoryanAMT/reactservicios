import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ServiciosCustomers from './components/ServicioCustomers';
import BuscadorCustomer from './components/BuscadorCustomer';
import CocheServiciosApi from './components/CocheServiciosApi';
import DepartamentosEmpleados from './components/DepartamentosEmpleados';
import EmpleadosOficio from './components/EmpleadosOficio';
import Departamentos from './components/MaestroDetalle/Departamentos';
import TablaMultiplicar from './components/TablaMultiplicar';
import Router from './components/Router';
import MenuRutas from './components/MenuRutas';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   {/* <App /> */}
  //   {/* <BuscadorCustomer/> */}
  //   {/* <ServiciosCustomers/> */}
  //   {/* <CocheServiciosApi/> */}
  // </React.StrictMode>
    // <DepartamentosEmpleados/>
    // <EmpleadosOficio/>
    // <Departamentos/>
    // <div>
    //   <TablaMultiplicar numero="7 "/>
    //   <TablaMultiplicar numero="3 "/>
    // </div>
    <div>
      <MenuRutas/>
      <Router/>
    </div>
    
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
