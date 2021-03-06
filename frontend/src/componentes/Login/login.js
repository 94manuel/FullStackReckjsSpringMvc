import React, { useState  } from 'react';

import {
  Grid,
  CircularProgress,
  Typography,
  Button,
  Tabs,
  Tab,
  TextField,
  Fade,
} from "@material-ui/core";
import { connect } from "react-redux";
import useStyles from "./styles";
import logo from "./logo.svg";
import Logorive from './logorive';

function Login(props) {
  var classes = useStyles();

  var [isLoading, setIsLoading] = useState(false);
  var [error, setError] = useState(null);
  var [activeTabId, setActiveTabId] = useState(0);
  var [intentos, setIntentos] = useState(3);
  var [nameValue, setNameValue] = useState("");
  var [loginValue, setLoginValue] = useState("");
  var [passwordValue, setPasswordValue] = useState("");
  
  function Entrar(data){
    props.addLogin(data);
    console.log(data[0]);
    if (data[0].email == "ejemplo@ejemplo.com" && data[0].pass == "12345678") {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data[0])
    };
      fetch("http://127.0.0.1:8000/login",requestOptions)
        .then(res => res.json())
        .then(
          (result) => {
            console.log(result);
            localStorage.setItem("id_token", "1");
            props.addSuccess();
            props.cambiar(true);
          },  
          (error) => {
            console.log(error);
            props.addOut()  
          }
        )
    } else {
      setError(true);
      setIsLoading(false);
      setIntentos(intentos--);
      
    }
    
  };
    return (
      <Grid container >
        <div className={classes.logotypeContainer}>
          <Logorive />
        </div>
        <div className={classes.formContainer}>
        <div className={classes.form}>
          <Tabs
            value={activeTabId}
            onChange={(e, id) => setActiveTabId(id)}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <Tab label="Entrar" classes={{ root: classes.tab }} />
            <Tab label="Registro" classes={{ root: classes.tab }} />
          </Tabs>
          {activeTabId === 0 && (
            <React.Fragment>
              <Typography variant="h3" className={classes.greeting}>
                Buenos dias usuario
              </Typography>
              <div className={classes.formDividerContainer}>
                <div className={classes.formDivider} />
                <Typography className={classes.formDividerWord}>or</Typography>
                <div className={classes.formDivider} />
              </div>
              <Fade in={error}>
                <Typography color="secondary" className={classes.errorMessage}>
                  Algo est?? mal con su nombre de usuario o contrase??a,  {intentos <=0 ? "Bloqueado los intentos":" Tienes "+ intentos  +" intentos m??s"} 
                </Typography>
              </Fade>
              <TextField
                id="email"
                InputProps={{
                  classes: {
                    underline: classes.textFieldUnderline,
                    input: classes.textField,
                  },
                }}
                value={loginValue}
                onChange={e => setLoginValue(e.target.value)}
                margin="normal"
                placeholder="Email Adress"
                type="email"
                fullWidth
              />
              <TextField
                id="password"
                InputProps={{
                  classes: {
                    underline: classes.textFieldUnderline,
                    input: classes.textField,
                  },
                }}
                value={passwordValue}
                onChange={e => setPasswordValue(e.target.value)}
                margin="normal"
                placeholder="Password"
                type="password"
                fullWidth
              />
              <div className={classes.formButtons}>
                {isLoading ? (
                  <CircularProgress size={26} className={classes.loginLoader} />
                ) : (
                  <Button
                    disabled={
                      loginValue.length === 0 || passwordValue.length === 0
                    }
                    onClick={() =>
                      Entrar([{
                        email:loginValue,
                        pass:passwordValue,
                        setIsLoading:setIsLoading,
                        setError:setError,}])
                    }
                    variant="contained"
                    color="primary"
                    size="large"
                  >
                    Entrar
                  </Button>
                )}
                <Button
                  color="primary"
                  size="large"
                  className={classes.forgetButton}
                >
                  Contrase??a olvidada
                </Button>
              </div>
            </React.Fragment>
          )}
          {activeTabId === 1 && (
            <React.Fragment>
              <Typography variant="h3" className={classes.greeting}>
                Bienvenido!
              </Typography>
              <Typography variant="h4" className={classes.subGreeting}>
                Crea tu cuenta
              </Typography>
              <Fade in={error}>
                <Typography color="secondary" className={classes.errorMessage}>
                  Algo est?? mal con su nombre de usuario o contrase??a :(
                </Typography>
              </Fade>
              <TextField
                id="name"
                InputProps={{
                  classes: {
                    underline: classes.textFieldUnderline,
                    input: classes.textField,
                  },
                }}
                value={nameValue}
                onChange={e => setNameValue(e.target.value)}
                margin="normal"
                placeholder="Full Name"
                type="email"
                fullWidth
              />
              <TextField
                id="email"
                InputProps={{
                  classes: {
                    underline: classes.textFieldUnderline,
                    input: classes.textField,
                  },
                }}
                value={loginValue}
                onChange={e => setLoginValue(e.target.value)}
                margin="normal"
                placeholder="Email Adress"
                type="email"
                fullWidth
              />
              <TextField
                id="password"
                InputProps={{
                  classes: {
                    underline: classes.textFieldUnderline,
                    input: classes.textField,
                  },
                }}
                value={passwordValue}
                onChange={e => setPasswordValue(e.target.value)}
                margin="normal"
                placeholder="Password"
                type="password"
                fullWidth
              />
              <div className={classes.creatingButtonContainer}>
                {isLoading ? (
                  <CircularProgress size={26} />
                ) : (
                  <Button
                    onClick={() =>
                      props.addLogin({
                        loginValue:loginValue,
                        passwordValue:passwordValue,}
                      )
                    }
                    disabled={
                      loginValue.length === 0 ||
                      passwordValue.length === 0 ||
                      nameValue.length === 0
                    }
                    size="large"
                    variant="contained"
                    color="primary"
                    fullWidth
                    className={classes.createAccountButton}
                  >
                    Crea tu cuenta
                  </Button>
                )}
              </div>
            </React.Fragment>
          )}
        </div>
      </div>
      </Grid>
    );
}
const mapStateToProps = state => ({
  Usuario: state.Login.usuario,
  isAuthenticated: state.Login.isAuthenticated,
})
const mapDispatchToProps = dispatch => {
  return {
    addLogin: (usuario) => dispatch({
                                type: 'agregar_Login',
                                usuario:usuario
                              }),
                              
    addSuccess: (usuario) => dispatch({
      type: 'LOGIN_SUCCESS'
    }),
    
    addOut: (usuario) => dispatch({
                                type: 'LOGIN_FAILURE'
                              }),
    
}}
export default connect(mapStateToProps, mapDispatchToProps)(Login)