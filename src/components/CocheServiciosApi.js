import React, { Component } from 'react'
import axios from 'axios';

export default class CocheServiciosApi extends Component {
    urlApiCoches = "https://apicochespaco.azurewebsites.net/";

    cajaMarca = React.createRef();

    state = {
        coches: null,
        marcaCoche: ""
    }

    loadCoches = (e) => {
        e.preventDefault();
        let request = "/webresources/coches";
        
        // ASTON MARTIN
        axios.get(this.urlApiCoches + request).then((response) => {
            let arrayCochesAux = response.data;
            console.log("Leyendo servicio");
            this.setState({
                coches: arrayCochesAux
            })
        })
    }


    buscarMarca = (e) => {
        e.preventDefault();
        let request = "/webresources/coches";
        let marcaCoche = this.cajaMarca.current.value;
        
        
        // ASTON MARTIN
        axios.get(this.urlApiCoches + request).then((response) => {
            let arrayCochesAux = response.data;
            console.log("Leyendo servicio");
            this.setState({
                coches: arrayCochesAux,
                marcaCoche: marcaCoche
            })
        })
        console.log(this.state.coches)
    }
    
  render() {
    

    return (
      <div>
        <h1>Coches Servicios API Marca</h1>
        <form>
            <label>Introduce marca: </label>
            <input type='text' ref={this.cajaMarca}></input>
            <button onClick={this.buscarMarca}>Buscar</button>
            <button onClick={this.loadCoches}>Buscar</button>
        </form>

        <table border={1} className='table table-dark'>
            <thead>
                <tr>
                    <th>Marca</th>
                    <th>Modelo</th>
                    <th>Conductor</th>
                    <th>Imgane</th>
                </tr>
            </thead>
            <tbody>
                {   
                    this.state.coches &&
                    this.state.coches.map((coche, index) => {
                        if (coche.marca == this.state.marcaCoche) {
                            return(
                                <tr key={index}>
                                    <td >{coche.marca}</td>
                                    <td >{coche.modelo}</td>
                                    <td >{coche.conductor}</td>
                                    <img src={coche.imagen} style={{width:"100px", height:"100px"}}/>
                                </tr>
                            );
                        }
                    })
                }
            </tbody>
        </table>



        

      </div>
    )
  }
}
