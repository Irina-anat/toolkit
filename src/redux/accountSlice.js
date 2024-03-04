import {  createSlice } from '@reduxjs/toolkit';


const accountSlice = createSlice({
    name: 'account',
    initialState: {
        balance: 100,
    },
    reducers: {
        deposit(state, action) {
            state.balance += action.payload;
        },
        withdraw(state, action) {
            state.balance -= action.payload;
        },
    },
});

export const { deposit, withdraw } = accountSlice.actions;

export const accountReducer = accountSlice.reducer;

// console.log(accountSlice.actions.deposit(5))
// console.log(accountSlice.actions.withdraw(10));
