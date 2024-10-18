import React, { Component } from 'react'
import axios from 'axios'
import Global from './../../Global'
import { useParams } from 'react-router-dom'



export default class Empleados extends Component {
  state = {
    empleados: [],
    texto: "",
    
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

  //  COMO PODEMOS COMPROBAR CUANDO HACEMOS UNA NUEVA LLAMADA A LA API CON EL NUEVO ID
  //  PODEMOS OBSERVAR QUE NO CAMBIA EL CONTENIDO DE EMPLEADOS Y ESTO ES DEBIDO A QUE
  //  SOLO HEMOS LLAMADO A LA FUNCION UNA VEZ Y NO ESTAMOS REFRESACANDO EL CONTENIDO
  //  PARA SOLUCIONAR ESTOS DEBEMOS USAR componentDidUpdate();

  componentDidUpdate = (oldProps) => {
    // console.log(" dibujando componente " + this.props.iddepartamento);

    //  SI COMPARAMOS, PODEMOS ACTUALZAR EL DIBUJO CUANDO
    //  HA CAMBIADO props (20)
    // console.log("Old props"+oldProps.iddepartamento);
    // console.log("Current props"+this.props.iddepartamento);
    //  SOLAMENTE ACUALIZAREMOS CUANDO PROPS HA CAMBIADO DE VALOR
    if(oldProps.iddepartamento != this.props.iddepartamento){
      this.loadEmpleados();
      // this.setState({
      //   // texto: "Update: "+this.props.idDepartamento
        
      // })
    }


    // this.setState({
    //   texto: "Update: " + this.props.iddepartamento
    // })
  }



  render() {

    // function getParametrosIdCine(){
    //   //  CAPTURAMOS LA VARIABLE DE RUTA
    //   //  MEDIANTE DESTRUCTURAR
    //   let {idcine, otroparamentro } = useParams();
    //   //  UNA VEZ TENEMOS LOS VALORES DE LA RUTA
    //   //  YA PODEMOS DIBUJAR LA ETIQUETA DEL COMPONENT
    //   //  CON SUS PROPS
    //   return(<Cine idcine={idcine} otroprops={otroparamentro}/>);
    
    // }

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
