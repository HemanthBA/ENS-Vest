import {configureStore} from '@reduxjs/toolkit'
import { Account } from './Account'
// import { ChangeColor } from './ColorChange'
// import { TodoSlice } from './Todos'



export const store = configureStore({
    reducer:{
        [Account.name]: Account.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch