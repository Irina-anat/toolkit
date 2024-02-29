import logger from 'redux-logger';
import { configureStore } from '@reduxjs/toolkit';
import { myValueSlice } from './myValue/slice';
import { userSlice } from './userSlice';


export const store = configureStore({
    reducer: {
        myValue: myValueSlice.reducer,
        user: userSlice.reducer
    },
    // middleware для логування. До списку прошарок +1 logger
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), logger],
});


//import { createAction, createReducer } from '@reduxjs/toolkit'

// до createSlice
// export const increment = createAction('myValue/increment')
// export const decrement = createAction('myValue/decrement')

// console.log(increment(10))

// const myReducer = createReducer(10, {
//     [increment]: (state, action) => state + action.payload,
//     [decrement]: (state, action) => state - action.payload,
// })