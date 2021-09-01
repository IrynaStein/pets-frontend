import {configureStore} from '@reduxjs/toolkit'

import petsReducer from './petSlice'

const store = configureStore({
    reducer: {
        pets: petsReducer,
    }
})

export default store