const initialState = {
  petList: [],
  status: "idle",
};

export default function petsReducer(state = initialState, action) {
  switch (action.type) {
    case "pets/petsLoading":
      return {
        ...state,
        status: "loading",
      }
      case "pets/petsLoaded":
          return {
              ...state,
              petList: action.payload,
              status: 'idle'
          }
          default:
          return state
  }
}


export function fetchPets(){
    return function(dispatch){
        dispatch({type: "pets/petsLoading"})
        fetch('/pets')
        .then((resp) => resp.json())
        .then((data) => {
            dispatch({type: "pets/petsLoaded", payload: data})
        })
    }
}