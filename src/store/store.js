import {configureStore} from '@reduxjs/toolkit'

import petsReducer from './petSlice'
import userReducer from './userSlice'

const store = configureStore({
    reducer: {
        pets: petsReducer,
        user: userReducer
    }
})

export default store