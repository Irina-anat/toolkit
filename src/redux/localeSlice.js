import { createSlice } from "@reduxjs/toolkit";

const localeSlice = createSlice({
  name: 'locale',
  initialState: {
    lang: 'ua',
  },

  reducers: {
    changeLang(state, action) {
      state.lang = action.payload;
    }
  },
});

export const { changeLang } = localeSlice.actions;

export const localeReducer = localeSlice.reducer;






// export const localeReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'locale/changeLang':
//       return {
//         ...state,
//         lang: action.payload,
//       };
//     default:
//       return state;
//   }
// };


// export const changeLang = newLang => {
//   return {
//     type: 'locale/changeLang',
//     payload: newLang,
//   };
// };