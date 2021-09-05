import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const createUser = createAsyncThunk("user/createUser", async (user) => {
  const response = await fetch("/signup", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(user),
  });
  const data = await response.json();
  return data;
});

export const deleteUser = createAsyncThunk("/user/deleteUser", async (id) => {
  const response = await fetch(`/users/${id}`, { method: "DELETE" });
  const data = await response.json();
  return data;
});

export const updateUser = createAsyncThunk(
  "/user/updateUser",
  async (updatedUser, id) => {
    const response = await fetch(`/users/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedUser, id),
    });
    const data = await response.json();
    // debugger;
    return data;
  }
);

const initialState = {
  user: null,
  status: "",
  errors: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userLogin(state, action) {
      state.user = action.payload;
    },
    userLogout(state) {
      state.user = null;
    },
    userDelete(state) {
      state.user = null;
    },
    userEdit(state, action) {
      state.user = action.payload;
    },
    resetErrors(state) {
      state.errors = "";
    },
  },
  extraReducers: {
    [createUser.pending](state) {
      state.status = "loading";
    },
    [createUser.fulfilled](state, action) {
      state.status = "idle";
      state.user = action.payload;
      if (action.payload.errors) {
        state.errors = action.payload.errors[0].map(
          (err, ind) => `${ind + 1}. ${err}, `
        );
      } else {
        state.errors = "";
      }
    },
    // [createUser.rejected](state, action){
    //     state.errors = action.payload.errors[0].map((err, ind) => `${ind+1}. ${err}, `)
    // }
    [deleteUser.pending](state) {
      state.status = "loading";
    },
    [deleteUser.fulfilled](state) {
      state.status = "completed";
      state.user = null;
    },
    [deleteUser.rejected](state, action) {
      state.status = "rejected";
      if (action.payload) {
        state.error = action.payload.errorMessage;
      } else {
        state.error = action.error.message;
      }
    },
    [updateUser.pending](state){
        state.status = "pending"
    },
    [updateUser.fulfilled](state, action){
        state.status = "updated"
        state.user = action.payload
    },
    [updateUser.rejected](state, action){
        state.status = "rejected"
        if (action.payload) {
            state.error = action.payload.errorMessage;
          } else {
            state.error = action.error.message;
          }
    }
  },
});

export const userActions = userSlice.actions;

export default userSlice.reducer;
