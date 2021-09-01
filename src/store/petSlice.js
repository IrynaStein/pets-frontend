import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"

export const fetchPets = createAsyncThunk("pets/fetchPets",() => {
  return fetch('/pets')
  .then((response) => response.json())
  .then(data =>  data)
})

const initialState = {
  petList: [],
  status: "idle",
};

const petSlice = createSlice({
  name: "pets",
  initialState,
  reducers: {
    petCreate(state, action){
      state.petList.push(action.payload)
    },
    petUpdate(state,action){
      const pet = state.petList.find((cat) => cat.id === action.payload.id)
      pet.hungry = action.payload.hungry
    }
  },
  extraReducers: {
    [fetchPets.pending](state){
      state.status = "loading"
    },
    [fetchPets.fulfilled](state, action){
      state.petList = action.payload
      state.status = "idle"
    }
  }
})

export const petActions = petSlice.actions

export default petSlice.reducer