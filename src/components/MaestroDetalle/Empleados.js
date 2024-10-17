import React, { Component } from 'react'
import axios from 'axios'
import Global from '../../Global'

export default class Empleados extends Component {
  state = {
    empleado: []
  }

  loadEmpleados = () => {
    let idDepartamento = this.props.iddepartamento;
    var request = "api/empleados/empleadodepartamento/"+idDepartamento;
    var url = Global.urlApiEmpleados + request;
    axios.get(url).then(response => {
      console.log(response.data)
      this.setState({
        empleado: response.data
      })
    })
  }



  render() {
    return (
      <div>
        <h1>Empleados Component</h1>
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
              this.state.empleado.map((empleado, index) => {
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
