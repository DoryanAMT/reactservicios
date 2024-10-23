import React, { Component } from 'react'
import axios from 'axios'
import Global from '../Global'
import Trabajadores from './Trabajadores'

export default class HospitalesMultiples extends Component {
    selectHospital = React.createRef();

    cajaIncrementoSalario = React.createRef();

    state = {
        hospitales: [],
        hospitalesSelecionados: []
    }

    loadHospitales = () => {
        let request = "api/Hospitales";
        let url = Global.urlEjemplos + request;
        axios.get(url).then (response => {
            console.log("Leyendo Hospitales")
            this.setState({
                hospitales: response.data
            })
        })
    }

    componentDidMount = () => {
        this.loadHospitales();
    }

    getHospitalesSeleccionados = (e) => {
        e.preventDefault();
        //
        let aux = [];
        let options = this.selectHospital.current.options;
        for (var opt of options){
            if(opt.selected == true){
                aux.push(opt.value);
            }
        }

        this.setState({
            hospitalesSelecionados: aux
        })
    }

    incrementoSalario = (e) => {
        e.preventDefault();

        let incrementoSalario = parseInt(this.cajaIncrementoSalario.current.value);

        let data = "incremento="+incrementoSalario+"&";
        let options = this.selectHospital.current.options;
        console.log(options)
        for (var opt of options){
            if(opt.selected == true){
                data += "idhospital="+ opt.value + "&";
            }
        }
        data = data.substring(0,data.length -1);

        let request = Global.urlEjemplos+"api/Trabajadores/UpdateSalarioTrabajadoresHospitales?";
        let url = request + data;
        
        axios.put(url).then(response => {
            console.log("Incremento realizado...")
        })
        

    }

  render() {
    return (
      <div>
        <h1>HospitalesMultiples</h1>
        
        <form>
            <select ref={this.selectHospital} className='form-control'
            size="8" multiple>
                {
                    this.state.hospitales.map((hospital, index) => {
                        return(
                            <option key={index} value={hospital.idHospital}>{hospital.nombre}</option>
                        );
                    })
                }
            </select>
            <label>Cantidad</label>
            <input type='text' ref={this.cajaIncrementoSalario} className='form form-control'></input>
            <br/>
            <button onClick={this.incrementoSalario} className='btn btn-secondary'>Incrementar Salario</button>
        
            <button onClick={this.getHospitalesSeleccionados} className='btn btn-info'>Mostrar trabajadores</button>
        </form>
        

        
        <Trabajadores idhospitales={this.state.hospitalesSelecionados}/>
        
      </div>

    )
  }
}
