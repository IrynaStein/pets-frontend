import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchCemetery = createAsyncThunk("cemetery/fetchCemetery", async() => {
    const response = await fetch('/cemetery')
    const data = await response.json()
    return data
})

const initialState = {
    status: "",
    cemetery: [],
    notifications: ""
}

const gameSlice = createSlice({
    name: "game",
    initialState,
    reducers: {

    },
    extraReducers: {
        [fetchCemetery.pending](state){
            state.status = "loading"
        },
        [fetchCemetery.fulfilled](state, action){
            state.status = "completed"
            state.cemetery = action.payload
        },
        [fetchCemetery.rejected](state){
            state.status = "rejected"
        }
    }
})

export const gameActions = gameSlice.actions
export default gameSlice.reducer