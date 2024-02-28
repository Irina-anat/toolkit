import { createSlice } from '@reduxjs/toolkit'

export  const myValueSlice = createSlice({
  name: 'myValue',
  initialState: 0,
    reducers: {
        increment(state, action) {
        //initialState примітив
            return state + action.payload
            // якщо initialState об`єкт
            // state.value += action.payload
        },
        decrement(state, action) {
            return state - action.payload
        }
  },
});

//console.log(myValueSlice)//actions
export const { increment, decrement } = myValueSlice.actions;



