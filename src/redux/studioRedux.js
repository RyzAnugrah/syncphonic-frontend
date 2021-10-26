import { createSlice } from "@reduxjs/toolkit";

const studioSlice = createSlice({
  name: "studio",
  initialState: {
    allStudio: [],
    detailStudio: {},
    bookingStudio: {},
  },
  reducers: {
    studioStart: (state, action) => {
      state.allStudio = action.payload;
    },
    studioDetailStart: (state, action) => {
      state.detailStudio = action.payload;
    },
    studioBookingStart: (state, action) => {
      state.bookingStudio = action.payload;
    },
  },
});

export const { studioStart, studioDetailStart, studioBookingStart } =
  studioSlice.actions;
export default studioSlice.reducer;
