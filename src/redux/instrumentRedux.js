import { createSlice } from "@reduxjs/toolkit";

const instrumentSlice = createSlice({
  name: "instrument",
  initialState: {
    allInstrument: [],
    detailInstrument: {},
    allBookingInstrument: {},
    bookingInstrument: {},
    myBookingInstrument: {},
    isFetching: false,
    error: false,
  },
  reducers: {
    instrumentStart: (state, action) => {
      state.allInstrument = action.payload;
    },
    instrumentDetailStart: (state, action) => {
      state.detailInstrument = action.payload;
    },
    instrumentAllBookingStart: (state, action) => {
      state.allBookingInstrument = action.payload;
    },
    instrumentBookingStart: (state, action) => {
      state.bookingInstrument = action.payload;
    },
    instrumentMyBookingStart: (state, action) => {
      state.myBookingInstrument = action.payload;
    },
    instrumentPostStart: (state) => {
      state.isFetching = true;
    },
    instrumentPostAccepted: (state) => {
      state.isFetching = false;
    },
    instrumentPostFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    instrumentPutStart: (state) => {
      state.isFetching = true;
    },
    instrumentPutAccepted: (state) => {
      state.isFetching = false;
    },
    instrumentPutFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  instrumentStart,
  instrumentDetailStart,
  instrumentAllBookingStart,
  instrumentBookingStart,
  instrumentMyBookingStart,
  instrumentPostStart,
  instrumentPostAccepted,
  instrumentPostFailure,
  instrumentPutStart,
  instrumentPutAccepted,
  instrumentPutFailure,
} = instrumentSlice.actions;
export default instrumentSlice.reducer;
