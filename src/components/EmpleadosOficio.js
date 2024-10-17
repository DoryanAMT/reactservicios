import React, { Component } from 'react'
import Global from './../Global';
import axios from 'axios';

export default class EmpleadosOficio extends Component {

    selectOficio = React.createRef();
    
    
    state = {
        departamentos: [],
        empleados: []
    }

    loadDepartamentos = () => {
        let request = "api/departamentos";
        let url = Global.urlApiDepartamentos + request;

        axios.get(url).then(response => {
            console.log(response.data);
            this.setState({
                departamentos: response.data
            })
        })
    }




    bucarEmpleados = (e) =>{
        e.preventDefault();
        let idDepartamento = this.selectOficio.current.value;
        console.log(this.selectOficio);
        let request = "api/Empleados/EmpleadosDepartamento/";
        let url = Global.urlApiEmpleados + request + idDepartamento;
        
        // console.log(url)
        axios.get(url).then(response => {
            console.log(response.data);
            this.setState({
                empleados: response.data
            })
        })

    }

    componentDidMount = () => {
        this.loadDepartamentos();
    }


  render() {
    
    return (
      <div>
        <h1>Empleado Oficio</h1>
        <form>
            <label>Selecciona un oficio</label>
            <select ref={this.selectOficio}>
                {
                    this.state.departamentos &&
                    this.state.departamentos.map((departamento, index) => {
                        return(
                            <option key={index} value={departamento.Numero}>{departamento.Nombre}</option>
                        );
                    })
                    
                }
            </select>
            <button onClick={this.bucarEmpleados}>Cargar empleados</button>
        </form>
        
        <table>
            <thead>
                <tr>
                    <th>Apellido</th>
                    <th>Salario</th>
                    <th>Oficio</th>
                    <th>Departamento</th>
                </tr>
            </thead>
            <tbody>
                {
                    this.state.empleados &&
                    this.state.empleados.map((empleado, index) => {
                        return(
                            <tr key={index}>
                                <td>{empleado.apellido}</td>
                                <td>{empleado.salario}</td>
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
