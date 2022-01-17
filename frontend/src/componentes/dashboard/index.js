import React, { Component  } from 'react';
import { Container,Button,Form,Table,Col,Row,FloatingLabel  } from 'react-bootstrap';
import { connect } from "react-redux";

class AgregarTrabajador extends Component {
  state = {
    id:0,
    documento: 0,
    email: "",
    PC: "",
    comentarios: "",
    fecha: "",
    formulario: [],
    meses : [
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Septiembre",
        "Octubre",
        "Noviembre",
        "Diciembre",
      ]
  }
  
  componentWillMount(){
    const { Usuario } =this.props;
    console.log(Usuario);
    let now = new Date();
    this.setState({
      id:1,
      Nombres:"manuel",
      email:"manu_fer_santo@live.com.mx",
      fecha: now.toLocaleDateString() + " " + now.toLocaleTimeString(),
    })
    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
  };
    fetch("http://127.0.0.1:8000/formulario",requestOptions)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            formulario:result
          });
          console.log(result);
          
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }
  handleSubmit = (event) => {
    const { addFormulario } =this.props;
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        user_id:this.state.id,
        documento: this.state.documento,
        email: this.state.email,
        Comentarios : this.state.Comentarios,
        PcFavorita: this.state.PcFavorita,
        fecha: this.state.fecha
      })
  };
    fetch("http://127.0.0.1:8000/formulario",requestOptions)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.items
          });
          console.log(result);
          alert("Agregado");
          addFormulario({
            user_id:this.state.id,
            documento: this.state.documento,
            email: this.state.email,
            Comentarios : this.state.Comentarios,
            PcFavorita: this.state.PcFavorita,
            fecha: this.state.fecha
          });
        },
        // Nota: es importante manejar errores aquí y no en 
        // un bloque catch() para que no interceptemos errores
        // de errores reales en los componentes.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  };
  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
    console.log(event.target.value);
  };
  Eliminar = (event) => {
    const requestOptions = {
      method: 'DELETE',
  };
    fetch("http://127.0.0.1:8000/formulario/"+event.value.id,requestOptions)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
          });
          console.log(result);
          
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }
  Regresar = (event) => {
    const { cambiar } = this.props;
    cambiar(0);
  }
  
  render(){
    return (
        <>
        <Container>          
            <Form>
              <Row className="mb-3">
                <Col>
                  <Form.Group className="mb-3" controlId="formDocumento">
                    <Form.Label>No. de documento </Form.Label>
                    <Form.Control 
                     name="documento"
                    type="number" 
                    onChange={this.handleChange}
                    placeholder="No. de documento " />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>email</Form.Label>
                  <Form.Control 
                  name="email"
                  type="email" 
                  onChange={this.handleChange}
                  placeholder="Email" 
                  />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group as={Col} controlId="formSistema">
                    <Form.Label>Marca favorita de PC</Form.Label>
                    <Form.Select
                    name="PcFavorita"
                    defaultValue="Escoger..."
                    onChange={this.handleChange}>
                      <option>Escoger</option>
                      <option>Windows</option>
                      <option>Linux</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col >
                <FloatingLabel controlId="floatingTextarea2" label="Comments">
                    <Form.Control
                    name="Comentarios" 
                    as="textarea"
                    placeholder="Comentarios"
                    onChange={this.handleChange}
                    style={{ height: '80px' }}
                    />
                </FloatingLabel>
                </Col>
                <Col>
                  <Form.Group as={Col} controlId="formFecha">
                    <Form.Label>Fecha y hora de entrega</Form.Label>
                    <Form.Control 
                    name="fecha" 
                    type="text"
                    defaultValue={this.state.fecha} 
                    onChange={this.handleChange}
                    disabled/>
                  </Form.Group>
                </Col>
              </Row>
              <Button variant="primary" onClick={this.Regresar}>
                Regresar
              </Button>
              <Button variant="primary" onClick={this.handleSubmit}>
                Enviar
              </Button>
              <Button variant="primary" onClick={this.handleSubmit}>
                Consultar
              </Button>
            </Form>
           
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Nombre Dotacion</th>
                      <th>Codigo dotacion</th>
                      <th>Sistema operativo</th>
                      <th>Tipo</th>
                      <th>Fecha</th>
                      <th>Editar - Eliminar</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.formulario.map((value, index) => (
                        <tr key={index}>
                            <td>{index}</td>
                            <td>{value.documento}</td>
                            <td>{value.email}</td>
                            <td>{value.pcFavorita}</td>
                            <td>{value.comentarios}</td>
                            <td>{value.fecha}</td>
                            <td><Button onClick={()=>this.Eliminar({value,index})}>Eliminar</Button></td>
                        </tr>
                        ))}
                  </tbody>
                </Table>
        </Container>
      </>
    );
  }
}
const mapStateToProps = state => ({
  Usuario: state.Login.usuario,
  Formulario: state.Login.formulario,
})
const mapDispatchToProps = dispatch => {
  return {
    addFormulario: (formulario) => dispatch({
                                type: 'agregar_formulario',
                                formulario:formulario
                              }),
    Deleteformulario: (formulario) => dispatch({
                                type: 'borrar_formulario',
                                formulario:formulario
                              }),  
    addAsignado: (asignado) => dispatch({
                                type: 'asignado',
                                asignado:asignado
                              }),
    dispatch
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(AgregarTrabajador)