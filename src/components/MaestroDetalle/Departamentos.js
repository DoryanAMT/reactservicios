import React, { Component } from 'react'
import axios from 'axios'
import Global from './../../Global';
import Empleados from './Empleados';

export default class Departamentos extends Component {

  selectDepartamento = React.createRef();

  state = {
    departamentos: [],
    departamento: 0
  }


  buscarEmpleados = (e) => {
    e.preventDefault();
    let departamento = parseInt(this.selectDepartamento.current.value);
    this.setState({
      departamento: departamento
    })
    console.log(this.state.departamento);
  }

  
  loadDepartamentos = () => {
    var request = "api/departamentos";
    var url = Global.urlApiDepartamentos + request;
    // console.log(url)

    axios.get(url).then(response => {
      // console.log(response.data);
        this.setState({
          departamentos: response.data
        })
    })

  }

  componentDidMount = () => {
    this.loadDepartamentos();
  }



  render() {
    return (
      <div>
        <h1>Departamentos</h1>
        <form>
          <label>Selecciona un departamento</label>
          <select ref={this.selectDepartamento}>
            {
              this.state.departamentos &&
              this.state.departamentos.map((departamento, index ) => {
                return(
                    <option key={index} value={departamento.Numero}>{departamento.Nombre}</option>
                );
              })
            }
          </select>
          <button onClick={this.buscarEmpleados}>Buscar empleados</button>
        </form>
        <h2 style={{color:"blue"}}>Id departamento: {this.state.departamento}</h2>
        {
          this.state.departamento != 0 &&
          <Empleados iddepartamento={this.state.departamento}/>
        }
      </div>
    )
  }
}
