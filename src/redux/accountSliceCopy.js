import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
  balance: 100,
};

export const deposit = createAction('account/deposit');
//console.log(deposit(5))

export const withdraw = createAction('account/withdraw');

export const accountReducer = createReducer(initialState, builder =>
  builder
    .addCase(deposit, (state, action) => {
      state.balance += action.payload;
      // return {          IMMER
      //   ...state,
      //   balance: state.balance + action.payload,
      // };
    })
    .addCase(withdraw, (state, action) => {
        state.balance -= action.payload;       
    })
);



// export const accountReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'account/deposit':
//       return {
//         ...state,
//         balance: state.balance + action.payload,
//       };

//     case 'account/withdraw':
//       return {
//         ...state,
//         balance: state.balance - action.payload,
//       };

//     default:
//       return state;
//   }
// };



// export const deposit = value => {
//   return {
//     type: 'account/deposit',
//     payload: value,
//   };
// };

// export const withdraw = value => {
//   return {
//     type: 'account/withdraw',
//     payload: value,
//   };
// };
