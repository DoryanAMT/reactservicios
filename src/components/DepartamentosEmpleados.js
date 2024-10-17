import React, { Component } from 'react'
import Global from './../Global';
import axios from 'axios';

export default class DepartamentosEmpleados extends Component {
    selectDepartamentos = React.createRef();

    


    buscarEmpleados = (e) => {
        e.preventDefault();
        let idDepartamentos = this.selectDepartamentos.current.value;
        var request = "api/empleados/empleadosdepartamento/"+ idDepartamentos;
        var url = Global.urlApiEmpleados + request;

        // axios.get("https://ddragon.leagueoflegends.com/cdn/14.20.1/data/en_US/champion.json").then(response => {
        //     console.log(response.data)    
        // })

        axios.get(url).then(response => {
            console.log(response.data);
            this.setState({
                empleados: response.data
            })
        })


    }

    state = {
        empleados : [],
        departamentos: []
    }

    loadDepartamentos = () => {
        var request = "api/departamentos";
        var url = Global.urlApiDepartamentos + request;
        axios.get(url).then(response => {
            console.log(response.data);
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
        <h1>Departamentos Empleados</h1>
        <form>
            <label>Seleccione un Departamento: </label>
            <select ref={this.selectDepartamentos}>
                {
                    this.state.departamentos.map((departamento, index) => {
                        return(
                            <option key={index} value={departamento.Numero}>
                                {departamento.Nombre}
                            </option>
                        );
                    })
                }
            </select>
            <button onClick={this.buscarEmpleados}>
                Buscar empleados
            </button>
            <ul>
                {
                    this.state.empleados &&
                    this.state.empleados.map((empleado, index) =>{
                        return(
                            <li key={index}>{empleado.apellido} - {empleado.oficio}</li>
                        );
                    })
                    
                }
            </ul>
        </form>
      </div>
    )
  }
}
