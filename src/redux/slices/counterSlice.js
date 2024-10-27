import { createSlice } from  '@reduxjs/toolkit';

const counterSlice = createSlice ({
    name: 'counter',
    initialState:{ count:0, is_dark_theme: true },

    reducers:{
        increase: (state) => {
            state.count++;
        },
    decrease: (state) => {
   state.count !== 0 && state.count--;
},
set_count: (state,action) => {
    state.count = action.payload;
},
changeTheme: (state) => {
    state.is_dark_theme = !state.is_dark_theme;
},

    },
});


export default counterSlice.reducer;

export const {increase, decrease, set_count, changeTheme } = counterSlice.actions;