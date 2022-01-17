import React, { useState  } from 'react';
import { connect } from "react-redux";
//import Dashboard from "../dashboard/index.js";

//import AgregarDotacion from '../AgregarDotacion/index';
import Login from './login';

class Inicio extends React.Component  {
  constructor(props) {
    super(props);
    this.state = {
      estadoLogin:false
    };
    console.log(props);
  }
  cambiar = (valor) => {
    this.setState((state) => {
      return {estadoLogin: true }
    });
  }
  render(){
    if (this.state.estadoLogin == true) {
      /*return (
        <>
          <Dashboard cambiar={this.cambiar}/>
        </>
      );*/
    } else {
      return (
        <>
          <Login cambiar={this.cambiar}/>
        </>
      );
    }
  }
}
/*
const mapStateToProps = state => ({
  Usuario: state.Login.usuario,
  isAuthenticated: state.isAuthenticated,
})*/
function mapStateToProps(state) {
  const { Usuario } = state.Login
  return { todoList: Usuario }
}
export default connect(mapStateToProps)(Inicio)