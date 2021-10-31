import { createSlice } from "@reduxjs/toolkit";

const instrumentSlice = createSlice({
  name: "instrument",
  initialState: {
    allInstrument: [],
    detailInstrument: {},
    bookingInstrument: {},
  },
  reducers: {
    instrumentStart: (state, action) => {
      state.allInstrument = action.payload;
    },
    instrumentDetailStart: (state, action) => {
      state.detailInstrument = action.payload;
    },
    instrumentBookingStart: (state, action) => {
      state.bookingInstrument = action.payload;
    },
  },
});

export const {
  instrumentStart,
  instrumentDetailStart,
  instrumentBookingStart,
} = instrumentSlice.actions;
export default instrumentSlice.reducer;
