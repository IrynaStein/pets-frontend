import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    user: null
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
        }
    }
})

export const userActions = userSlice.actions

export default userSlice.reducer