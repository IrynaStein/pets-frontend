import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"

export const fetchPets = createAsyncThunk("pets/fetchPets",() => {
  return fetch('/pets')
  .then((response) => response.json())
  .then(data => data)
})

// export const deletePet = createAsyncThunk("pets/deletePet", (id) => {
// return fetch(`pets/${id}`, {
//   method: "DELETE"
// })
// })

export const deletePet = createAsyncThunk('/pets/deletePet', async(id) => {
  const response = await fetch(`pets/${id}`, {method: "DELETE"})
  const data = await response.json()
  return data
})

export const createPet = createAsyncThunk('pets/createPet', async (pet) => {
  const response = await fetch ('pets/', {
    method: "POST", 
    headers: {"Content-Type" : "application/json", "Accept": "application/json"}, 
    body: JSON.stringify(pet)})
    const data = await response.json()
    return data
})

const initialState = {
  petList: [],
  status: "idle",
  pet: [],
  notification: "",
  dirty: Math.floor(Math.random() * 4) + 1
};

const petSlice = createSlice({
  name: "pets",
  initialState,
  reducers: {
    petCreate(state, action){
      state.petList.push(action.payload)
    },
    // petDelete(state, action){
    //   state.petList = state.petList.filter((pet) => pet.id !== action.payload)
    // },
    petFeed(state,action){
        state.pet = state.petList.find((pet) => pet.id === action.payload)
        if ( state.pet.hungry < 4){
          state.pet.hungry +=1
          state.pet.sleepy -=1
          state.notification = "I am still hungry!"
        }
        else {
          state.notification = "Thank you, I am full"
        }
    },
    getHungry(state, action){
      state.pet = state.petList.find((pet) => pet.id === action.payload)
      state.pet.hungry -=1
    },
    petPlay(state, action){
      state.pet = state.petList.find((pet) => pet.id === action.payload)
      if (state.pet.bored < 4){
        state.pet.bored +=1
        state.dirty -=1
        state.pet.sleepy -=1
        state.pet.hungry -=1
        state.notification = "Can we play more, please?"
      }
      else {
        state.notification = "I am tierd an dont want to play anymore"
      }
    },
    getBored(state, action){
      state.pet = state.petList.find((pet) => pet.id === action.payload)
      state.pet.bored -=1
    },
    petSleep(state, action){
      state.pet = state.petList.find((pet) => pet.id === action.payload)
      state.pet.sleepy = 4
    },
    getSleepy(state, action){
      state.pet = state.petList.find((pet) => pet.id === action.payload)
      state.pet.sleepy -=1
    },
    petClean(state, action){
      state.pet = state.petList.find((pet) => pet.id === action.payload)
      state.dirty = 4
      state.pet.sleepy -=1
    },
    getDirty(state, action){
      state.pet = state.petList.find((pet) => pet.id === action.payload) 
      state.pet.dirty -=1
    },
    petDead(state, action){
      state.pet = state.petList.find((pet) => pet.id === action.payload)
      state.pet.alive = false
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
    //rejected
    [deletePet.pending](state){
      state.status = "loading"
    },
    [deletePet.fulfilled](state, action){
      state.petList = state.petList.filter((pet) => pet.id !== action.payload.id)
      console.log(action.payload)
      state.status = "deleted"
    }
  }
})

export const petActions = petSlice.actions

export default petSlice.reducer