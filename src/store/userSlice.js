import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const createUser = createAsyncThunk ('user/createUser', async(user) => {
   const response = await fetch ('/signup', {
       method: "POST",
       headers: {"Content-Type": 'application/json', 'Accept': 'application/json'},
       body: JSON.stringify({
        user_name : user.user_name,
        password : user.password,
        password_confirmation: user.password_confirmation,
        email: user.email,
        avatar: user.avatar[0]
       }
        )})
       const data = await response.json()
       return data
} ) 

export const deleteUser = createAsyncThunk ('user/deleteUser', async(id)=> {
    const response = fetch(`/users/${id}`, {
        method: "DELETE"
    })
    const data = await response.json()
    return data
})


const initialState = {
    user: null,
    status: "",
    errors: ""
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        userLogin(state, action){
            state.user = action.payload
        },
        userLogout(state){
            state.user = null
        },
        userDelete(state){
            state.user = null
        },
        userEdit(state, action){
            state.user = action.payload
        },
        resetErrors(state){
            state.errors = ""
        }
    },
    extraReducers: {
        [createUser.pending](state){
            state.status = "loading"
        },
        [createUser.fulfilled](state, action){
            state.status = "idle"
            state.user = action.payload
            if (action.payload.errors){
                state.errors = action.payload.errors[0].map((err, ind) => `${ind+1}. ${err}, `)
            }
            else{
                state.errors = ""
            }
            
        },
        // [createUser.rejected](state, action){
        //     state.errors = action.payload.errors[0].map((err, ind) => `${ind+1}. ${err}, `)
        // }
        [deleteUser.pending](state){
            state.status = 'pending'
        },
        [deleteUser.fulfilled](state, {payload}){
            console.log(payload)
            state.status = "completed"
            state.user = null
        },
        [deleteUser.rejected](state, {payload}){
            state.status = "rejected"
        }
    }
})

export const userActions = userSlice.actions

export default userSlice.reducer