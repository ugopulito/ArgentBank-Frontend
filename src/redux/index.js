import { configureStore, createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: 'User',
    initialState: {
        email: '',
        password: '',
        userName: 'default'
    },
    reducers: {
        email: (state, action) => {
            state.email = action.payload
        },
        savePassword: (state, action) => {
            state.password = action.payload
        },
        editUserName: (state, action) => {
            state.userName = action.payload
        }
    }
})

export const { setEmail, savePassword, editUserName } = userSlice.actions;


export const userStore = configureStore({
    reducer: {
        User: userSlice.reducer
    }
})