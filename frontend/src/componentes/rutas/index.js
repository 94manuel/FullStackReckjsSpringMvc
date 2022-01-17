import React from 'react';
import { connect } from 'react-redux';
import Login from "../Login/index.js";
import Dashboard from "../dashboard/index.js";
import { BrowserRouter as Router, Routes, Route, Navigate, useHistory } from "react-router-dom";
var datos =[];
 class Inicio extends React.Component {
    constructor(props) {
      super(props);
      const { socket } = this.props;
      this.state = {
        error: null,
        isLoaded: false,
        items: [],
        routes: [
          {
            path: "/",
            exact: true,
            sidebar: () => <div>Reclutamiento</div>,
            main: () => <Login/>
          },
          {
            path: "/dashboard",
            exact: true,
            sidebar: () => <div>Reclutamiento</div>,
            main: () => <Dashboard/>
          }
        ],
        instance:[],
      };
    }
    componentDidMount(){
      const { usuario,Salas } = this.props;
      
    }
    openNav = () => {
      document.getElementById("mySidenav").style.width = "300px";
      document.getElementById("iniciador").style.marginLeft = "300px";
    }

    closeNav = () => {
      document.getElementById("mySidenav").style.width = "0";
      document.getElementById("iniciador").style.marginLeft= "0";
    }
    render(){
    
      return (
        <Routes style={{top: '0'}}>
          {this.state.routes.map((route, index) => (
                      <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        element={<route.main />}
                      />
                    ))}
        </Routes>
      )
    }
  }
  const mapStateToProps = state => ({
    usuario: state.App.usuario,
  })
  
  export default connect(mapStateToProps)(Inicio);
