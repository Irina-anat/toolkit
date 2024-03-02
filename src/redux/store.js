import { combineReducers, createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';
import { accountReducer } from './accountSlice';
import { localeReducer } from './localeSlice';


const rootReducer = combineReducers({
  account: accountReducer,
  locale: localeReducer,
});

const enhancer = devToolsEnhancer();
export const store = createStore(rootReducer, enhancer);




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