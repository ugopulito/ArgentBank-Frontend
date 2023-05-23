import { configureStore, createSlice } from '@reduxjs/toolkit'

//slices
const authSlice = createSlice({
    name: 'Auth',
    initialState: {
        email: '',
        password: ''
    },
    reducers: {
        setCredentials: (state, action) => {
            const {name, value} = action.payload;
            state[name] = value;
        },
        resetAuth: (state) => {
            return {
                email: '',
                password: ''
            }
        }
    }
})

const userSlice = createSlice({
    name: 'User',
    initialState: {
        firstName: '',
        lastName: '',
        userName: ''
    }, 
    reducers: {
        saveUserData: (state, action) => {
            const {name, value} = action.payload;
            state[name] = value;
        },
        resetUser: (state) => {
            return {
                firstName: '',
                lastName: '',
                userName: ''
            }
        }
    }
})

//redux actions
export const { setCredentials, resetAuth } = authSlice.actions;
export const { saveUserData, resetUser } = userSlice.actions;


export const store = configureStore({
    reducer: {
        Auth: authSlice.reducer,
        User: userSlice.reducer
    }
})