const datosIniciales = {
  estado:[],
}

const reducer = (state = datosIniciales, action) => {
  switch (action.type) {
    case "usuario":
      return {
        ...state,
        estado: state.estado.concat(action.usuario)
      }
      break;
    case "borrar_usuario":
        return {
          ...state,
          estado: state.estado = action.usuario
        }
        break;
    case "ediar_usuario":
       return {
         ...state,
         estado: state.estado.filter(j => j.id !== action.editarusuario.id)
       }
        break;

  }
  return state;
}

export default reducer
