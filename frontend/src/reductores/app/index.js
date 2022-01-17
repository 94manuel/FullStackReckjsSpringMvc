const datosIniciales = {
  usuario:[],
  isAuthenticated: false,
  formulario: [],
  asignado: [],
}

const reducer = (state = datosIniciales, action) => {
  switch (action.type) {
    case "agregar_Login":
      return {
        ...state,
        usuario: state.usuario = action.usuario,
      }
      break;
    case "LOGIN_SUCCESS":
      return {
        ...state,
        isAuthenticated: state.isAuthenticated = true
      }
      break;
    case "LOGIN_FAILURE":
        return {
          ...state,
          isAuthenticated: state.isAuthenticated = false
        }
        break;
    case "ediar_usuario":
       return {
         ...state,
         usuario: state.usuario.filter(j => j.id !== action.editarusuario.id)
       }
       break;
    case "agregar_formulario":
      return {
        ...state,
        formulario: state.formulario.concat(action.formulario)
       }
      break;
    case "borrar_formulario":
       return {
        ...state,
        formulario: state.formulario = action.formulario
       }
      break;
    case "asignado":
        return {
          ...state,
          asignado: state.asignado = action.asignado
        }
        break;

  }
  return state;
}

export default reducer
