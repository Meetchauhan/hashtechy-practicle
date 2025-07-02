import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: "category",
    initialState: {
        category: "All",
    },
    reducers: {
        getCategory: (state, action) => {
            state.category = action.payload
        },

    },
});

export const { getCategory } = filterSlice.actions;

export default filterSlice.reducer;
