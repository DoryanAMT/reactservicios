import React, { Component } from 'react'
import axios from 'axios'
import Global from './../../Global'

export default class Empleados extends Component {
  state = {
    empleados: []
  }

  loadEmpleados = () => {
    let idDepartamento = this.props.iddepartamento;
    let request = "api/Empleados/EmpleadosDepartamento/"+idDepartamento;
    let url = Global.urlApiEmpleados + request;
    console.log(url);
    axios.get(url).then(response => {
      console.log(response.data);
      this.setState({
        empleados: response.data
      })
    })
  }

  componentDidMount = () => {
    this.loadEmpleados();
  }



  render() {
    return (
      <div>
        <h1>Empleados Component {this.props.iddepartamento}</h1>
        <table border="1">
          <thead>
            <tr>
              <th>Apellido</th>
              <th>Oficio</th>
              <th>Departamento</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.empleados.map((empleado, index) => {
                return(
                  <tr key={index}>
                    <td>{empleado.apellido}</td>
                    <td>{empleado.oficio}</td>
                    <td>{empleado.departamento}</td>
                  </tr>
                );
              })
            }
          </tbody>
        </table>
      </div>
    )
  }
}
