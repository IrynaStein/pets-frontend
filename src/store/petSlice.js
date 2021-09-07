import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchPets = createAsyncThunk("pets/fetchPets", async () => {
  const response = await fetch("/pets");
  const data = await response.json();
  return data;
});

export const deletePet = createAsyncThunk("/pets/deletePet", async (id) => {
  const response = await fetch(`pets/${id}`, { method: "DELETE" });
  const data = await response.json();
  return data;
});

export const createPet = createAsyncThunk("pets/createPet", async (pet) => {
  const response = await fetch("/pets", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(pet),
  });
  const data = await response.json();
  return data;
});

export const updatePet = createAsyncThunk("pets/updatePet", async (pet) => {
  const response = await fetch(`/pets/${pet.id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      sleepy: pet.sleepy,
      alive: pet.alive,
      bored: pet.bored,
      healthy: pet.healthy,
      hungry: pet.hungry,
    }),
  });
  const data = await response.json();
  return data;
});

const initialState = {
  petList: [],
  pet: [],
  dirty: Math.floor(Math.random() * 4) + 1,
  notification: "",
  status: "idle",
  errors: [],
};

const petSlice = createSlice({
  name: "pets",
  initialState,
  reducers: {
    gamePet(state, action) {
      state.pet = action.payload;
    },
    petFeed(state, action) {
      state.pet = state.petList.find((pet) => pet.id === action.payload);
      if (state.pet.hungry < 4) {
        state.pet.hungry += 1;
        state.pet.sleepy -= 1;
        state.notification = "I am still hungry!";
      } else {
        state.notification = "Thank you, I am full";
      }
    },
    getHungry(state, action) {
      state.pet = state.petList.find((pet) => pet.id === action.payload);
      state.pet.hungry -= 1;
    },
    petPlay: (state, action) => {
      state.pet = state.petList.find((pet) => pet.id === action.payload);
      if (state.pet.bored < 4) {
        state.pet.bored += 1;
        state.dirty -= 1;
        state.pet.sleepy -= 1;
        state.pet.hungry -= 1;
        state.notification = "Can we play more, please?";
      } else {
        state.notification = "I am tierd an dont want to play anymore";
      }
    },
    getBored(state, action) {
      state.pet = state.petList.find((pet) => pet.id === action.payload);
      state.pet.bored -= 1;
    },
    petSleep(state, action) {
      state.pet = state.petList.find((pet) => pet.id === action.payload);
      state.pet.sleepy = 4;
    },
    getSleepy(state) {
      state.pet.sleepy = state.pet.sleepy - 1;
    },
    petClean(state, action) {
      state.pet = state.petList.find((pet) => pet.id === action.payload);
      state.dirty = 4;
      state.pet.bored += 1;
      state.pet.sleepy -= 1;
  
    },
    getDirty(state, action) {
      state.pet = state.petList.find((pet) => pet.id === action.payload);
      state.pet.dirty -= 1;
    },
    petDead(state, action) {
      state.pet = state.petList.find((pet) => pet.id === action.payload);
      state.pet.alive = false;
    },
    getSick(state, action) {
      state.pet = state.petList.find((pet) => pet.id === action.payload);
      state.pet.healthy = Math.random() < 0.6;
      // debugger;
      if (!state.pet.healthy){
        state.pet.bored = 0
        state.dirty = 0
        state.pet.hungry = 0
        state.pet.sleepy = 0
        state.notification = "I am not feeling well. Please take me to the vet!"
      } else {
        return 
      }
    },
    gotoVet(state, action) {
      state.pet = state.petList.find((pet) => pet.id === action.payload);
      state.pet.alive = Math.random() < 0.8;
      if (state.pet.alive) {
        state.pet.healthy = true;
        state.pet.sleepy = 4
        state.pet.hungry = 4
        state.notification = `Vet says: "Your pet can go home now. It is healthy and happy again. Take care!!!"`;
        state.pet.bored = 4
        state.dirty = 4
      } else {
        state.notification = `Nurse says: "Vet tried everything, but unfortunately was not able to cure your pet. We are so sorry for your loss!"`;
      }
    },
    resetState: (state, action) => {
      state.petList = []
    },
  },
  extraReducers: {
    [fetchPets.pending](state) {
      state.status = "loading";
    },
    [fetchPets.fulfilled](state, action) {
      state.status = "idle";
      if (action.payload.errors) {
        state.errors = action.payload.errorMessage;
      } else {
        state.errors = []
        state.petList = action.payload;
      }
    },
    [fetchPets.rejected](state, action) {
      state.status = "rejected";
      if (action.payload) {
        state.errors = action.payload.errorMessage;
      } else {
        state.errors = action.error.message;
      }
    },
    [deletePet.pending](state) {
      state.status = "loading";
    },
    [deletePet.fulfilled](state, action) {
      state.status = "deleted";
      if (action.payload.errors){
        state.errors = action.payload.errors
      }
      else {
        state.petList = state.petList.filter(
          (pet) => pet.id !== action.payload.id)
      }
    },
    [createPet.pending](state) {
      state.status = "loading";
    },
    [createPet.fulfilled](state, action) {
      state.status = "completed";
      state.petList.push(action.payload);
      if (action.payload.errors) {
        state.errors =
          "Sorry, we couldn't process your request. Please make sure all fields are filled in and try again. Thank you!";
      } else if (action.payload.errors) {
        state.errors = action.payload.errors.map((err) => err);
      } else {
        state.errors = "Your pet was successfully created!";
      }
    },
    [updatePet.pending](state) {
      state.status = "pending";
    },
    [updatePet.fulfilled](state, action) {
      state.status = "completed";
      // debugger;
      // state.petList.push(state.petList.map((pet) => {
      //   if (pet.id === action.payload.id){
      //     return action.payload
      //   }
      // else {
      //   return pet
      // }
      // }))
      state.pet = action.payload;
    },
  },
});

export const petActions = petSlice.actions;

export default petSlice.reducer;
