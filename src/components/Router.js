import React, { Component } from 'react'
import { useParams } from 'react-router-dom'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import TablaMultiplicar from './TablaMultiplicar'
import Home from './Home'
import NotFound from './NotFound'



export default class Router extends Component {

    


  render() {
    function TablaMultiplicarElement(){
      //    ESTA FUNCION NOS SERIVIRA PARA CAPTURAR LOS
      //    PARAMETROS EN UNA RUTA
      //    PARA SEPARAR PROPS DE PARAMS VOY A LLAMAR A NUESTRO
      //    PARAMETRO EN RUTA minumero

      var {minumero } = useParams();
      //  UNA VEZ TENEMOS LOS VALORES DE LA RUTA
      //  YA PODEMOS DIBUJAR LA ETIQUETA DEL COMPONENT
      //  CON SUS PROPS
      return(<TablaMultiplicar numero={minumero}/>);
    
    }
    return (
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/tabla/:minumero' 
                element={<TablaMultiplicar/>}/>
            {/* PARA LAS RUTAS QUE NO EXISTEN DEBEMOS UTILIZAR
            UN ASTERISCO DETNRO DEL APTH Y DEBE SER
            LA ULTIMA ETIQUETA DE <Routes>  */}
            <Route path='*' element={<NotFound/>}/>
            
        </Routes>
      </BrowserRouter>

    )
  }
}
