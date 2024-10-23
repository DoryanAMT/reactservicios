import React, { Component } from 'react'
import axios from 'axios';
import Global from '../Global';

export default class Trabajadores extends Component {
    state = {
        trabajadores: []
    }

    loadTrabajadores = () => {
        let idsHospitales = this.props.idhospitales
        if (idsHospitales.length != 0) {
            // 
            let data = "";
            for (var id of idsHospitales) {
                data += "idhospital="+ id + "&";
            }
            //ELIMNAMOS EL ULTIMO CARTARE DEL STRING
            //idhospital=18&idhospital=22&idhospital=45&
            data = data.substring(0,data.length -1);
            this.setState({
                mensaje: data
            })
            let request = "/api/Trabajadores/TrabajadoresHospitales?"+data;
            let url = Global.urlEjemplos + request;
            console.log(url);
            axios.get(url).then(response => {
                console.log("Leyendo Trabajadores");
                this.setState({
                    trabajadores: response.data
                })
            })
        }
    }

    componentDidMount = () => {
        this.loadTrabajadores();
    }

    componentDidUpdate = (oldProps) => {
        if (oldProps.idhospitales != this.props.idhospitales) {
            this.loadTrabajadores();
        }
    }

  render() {
    return (
      <div>
        <h2 style={{color:"blue"}}>
            {this.state.mensaje}
        </h2>
        <h1>Trabajadores</h1>
        <table className='table table-light'>
            <thead>
                <tr>
                    <th>Id Hospital</th>
                    <th>Apellido</th>
                    <th>Salario</th>
                </tr>
            </thead>
            <tbody>
            {
                this.state.trabajadores.map((trabajador, index) => {
                    return(
                        <tr key={index}>
                            <td>{trabajador.idHospital}</td>
                            <td>{trabajador.apellido}</td>
                            <td>{trabajador.salario}</td>
                        </tr>
                    );
                })
            }
            </tbody>
        </table>
        {/* <ul>
            {
                this.props.idhospitales.map((id, index) => {
                    return(
                        <li key={index}>{id}</li>
                    );
                })
            }
        </ul> */}
      </div>
    )
  }
}
