import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"

export const fetchPets = createAsyncThunk("pets/fetchPets",() => {
  return fetch('/pets')
  .then((response) => response.json())
  .then(data => data)
})

export const deletePet = createAsyncThunk("pets/deletePet", (id) => {
return fetch(`pets/${id}`, {
  method: "DELETE"
})
})

const initialState = {
  petList: [],
  status: "idle",
  pet: [],
  notification: ""
};

const petSlice = createSlice({
  name: "pets",
  initialState,
  reducers: {
    petCreate(state, action){
      state.petList.push(action.payload)
    },
    petFeed(state,action){
        state.pet = state.petList.find((pet) => pet.id === action.payload)
        if ( state.pet.hungry < 4){
          state.pet.hungry +=1
          state.notification = "I am still hungry!"
        }
        else {
          state.notification = "Thank you, I am full"
        }
       
    },
    petPlay(state, action){
      state.pet = state.petList.find((pet) => pet.id === action.payload)
      if (state.pet.bored < 4){
        state.pet.bored +=1
        state.notification = "Can we play more, please?"
      }
      else {
        state.notification = "I am tired and dont want to play anymore"
      }
      
    },
    petDelete(state, action){
      state.petList = state.petList.filter((pet) => pet.id !== action.payload)
    }
  },
  extraReducers: {
    [fetchPets.pending](state){
      state.status = "loading"
    },
    [fetchPets.fulfilled](state, action){
      state.petList = action.payload
      state.status = "idle"
    },
    [deletePet.fullfilled](state){
      state.status = "deleted"
    }
  }
})

export const petActions = petSlice.actions

export default petSlice.reducer