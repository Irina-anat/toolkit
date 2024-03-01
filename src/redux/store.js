import { combineReducers, createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';



const accInitialState = {
  balance: 100,
}

const accountReducer = (state = accInitialState, action) => {
  switch (action.type) {
    case 'account/deposit':
      return {
        ...state,
        balance: state.balance + action.payload,
      };

    case 'account/withdraw':
      return {
        ...state,
        balance: state.balance - action.payload,
      };

    default:
      return state;
  }
};


const rootReducer = combineReducers({
  account: accountReducer,
})

const enhancer = devToolsEnhancer();
export const store = createStore(rootReducer, enhancer);

export const deposit = value => {
  return {
    type: 'account/deposit',
    payload: value,
  };
};

export const withdraw = value => {
  return {
    type: 'account/withdraw',
    payload: value,
  };
};


// const initialState = {
//   a: {},
//   account: {
//     c: {},
//     balance: 10,
//   },
// };


// switch (action.type) {
//     case 'account/deposit':
//       return {
//         ...state,
//         account: {
//           ...state.account,
//           balance: state.account.balance + action.payload,
//         },
//       };