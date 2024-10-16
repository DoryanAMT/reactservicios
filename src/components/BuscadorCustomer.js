import React, { Component } from 'react'
import axios, { Axios } from 'axios'
import Global from './Gobal'

export default class BuscadorCustomer extends Component {
    urlApi = Global.urlApiCustomer
    cajaid = React.createRef();
    state={
        customer: null
    }

    buscarCustomer = (e) => {
        // PARA NO TENER PROBLEMAS CON EL SUBMIT Y PONER VARIOS BOTONES
        // HAY QUE USAR EL preventDefault() PARA QUE NO SEA UN SUBMIT
        e.preventDefault();
        //  RECUPERAMOS EL VALOR DE LA CAJA
        let idCustomer = this.cajaid.current.value;
        //  /customers/ALFKI.json
        let request = "customers/"+idCustomer+".json";
        // console.log(request)
        axios.get(this.urlApi + request).then((response) => {
            console.log("Leyendo servicio");
            this.setState({
                customer: response.data.customer
            });
        })

    }

  render() {
    return (
      <div>
        <h1>Buscador Api customer</h1>
        <form>
            <label>Introduce id: </label>
            <input type='text' ref={this.cajaid}/>
            <button type='button' onClick={this.buscarCustomer} >
                Buscar Customer
            </button>
        </form>
        {
            this.state.customer &&
            <ul>
                <li>{this.state.customer.contactName}</li>
                <li>Empresa: {this.state.customer.companyName}</li>
                <li>Puesto: {this.state.customer.contactTitle}</li>
                <li>Ciudad: {this.state.customer.city}</li>
            </ul>
        }
      </div>
    )
  }
}
