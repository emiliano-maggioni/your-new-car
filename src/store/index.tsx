import { createSlice, configureStore, PayloadAction  } from '@reduxjs/toolkit';
import { defState } from 'utility/Types';


export const initialState: defState = {
    isAuth: false,
    isLoading: false,
    error: {message: 'An Error occurred'},
}

export const mainSlice = createSlice({
    name: 'main',
    initialState,
    reducers: {
        setAuthSuccess: (state, { payload }: PayloadAction) => {
            state.currentUser = payload
            state.isAuth = true
        },
        setLogOut: (state) => {
            state.isAuth = false
            state.currentUser = undefined
        },
        setAuthFailed: (state, { payload }: PayloadAction) => {
            state.error = payload
            state.isAuth = false
        },
    },
})

 
  export const { setAuthSuccess, setLogOut, setAuthFailed} = mainSlice.actions


  export const store = configureStore({
    reducer: {  main: mainSlice.reducer  }
  })

