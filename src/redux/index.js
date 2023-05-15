import { configureStore, createSlice } from '@reduxjs/toolkit'

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
    }
})

const userSlice = createSlice({
    name: 'User',
    initialState: {
        email: "",
        firstName: "",
        lastName: "",
        userName: "",
        createdAt: "",
        updatedAt: "",
        id: ""
    }, 
    reducers: {
        saveUserData: (state, action) => {
            const {name, value} = action.payload;
            state[name] = value;
        },
        editUsername: (state, action) => {
            state.userName = action.payload
        }
    }
})

export const { setCredentials } = authSlice.actions;

export const { saveUserData } = userSlice.actions;


export const userStore = configureStore({
    reducer: {
        Auth: authSlice.reducer,
        User: userSlice.reducer
    }
})