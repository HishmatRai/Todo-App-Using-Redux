const INITIAL_STATE = {
    name : []
}

const reducer = (state= INITIAL_STATE,action)=>{
    console.log(action)
switch (action.type) {
    case "Add" : 
    state.name.push(action.todo)
    return {
        name : state.name
    }
    case "DELETE" : 
    state.name.splice(action.ind,1)
    return {
        name : state.name
    }
    case "EDIT" : 
    console.log(action.ind)
  state.name[action.ind].value = false
  console.log(state.name[action.ind])
    return {
        name : state.name
    }
    case "CANCEL" : 
    state.name[action.ind].value = true
      return {
          name : state.name
      }
      case "UPDATE" : 
      state.name[action.ind].value = 
      state.name[action.ind].name = action.updValue;
        return {
            name : state.name
        }
    default : return state
}

}
export default reducer