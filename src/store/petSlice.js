import {createSlice} from "@reduxjs/toolkit"

const initialState = {
  petList: [],
  status: "idle",
};

const petsSlice = createSlice({
  name: "pets",
  initialState,
  reducers: {
    petCreated(state, action){
      state.petList.push(action.payload)
    },
    petUpdated(state,action){
      const pet = state.petList.find((cat) => cat.id === action.payload.id)
    }
  }
})