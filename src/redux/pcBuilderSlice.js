import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedCategories: ["iam"],
};

const pcBuilderSlice = createSlice({
  name: "pcBuilder",
  initialState,
  reducers: {
    addComponentForPCBuilder: (state, action) => {
      console.log("action.payload", action.payload);
      state.selectedCategories = [...state.selectedCategories, action.payload];
    },
  },
});

export const { addComponentForPCBuilder } = pcBuilderSlice.actions;

export default pcBuilderSlice.reducer;
