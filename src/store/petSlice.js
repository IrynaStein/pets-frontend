import {createSlice} from "@reduxjs/toolkit"

const initialState = {
  petList: [],
  status: "idle",
};

const petSlice = createSlice({
  name: "pets",
  initialState,
  reducers: {
    petCreated(state, action){
      state.petList.push(action.payload)
    },
    petUpdated(state,action){
      const pet = state.petList.find((cat) => cat.id === action.payload.id)
      pet.hungry = action.payload.hungry
    }
  }
})

export const catActions = petSlice.actions

export default petSlice.reducer