import { createSlice } from "@reduxjs/toolkit";

const studioSlice = createSlice({
  name: "studio",
  initialState: {
    allStudio: [],
    detailStudio: {},
  },
  reducers: {
    studioStart: (state, action) => {
      state.allStudio = action.payload;
    },
    studioDetailStart: (state, action) => {
      state.detailStudio = action.payload;
    },
  },
});

export const { studioStart, studioDetailStart } = studioSlice.actions;
export default studioSlice.reducer;
