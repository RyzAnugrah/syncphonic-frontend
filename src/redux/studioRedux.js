import { createSlice } from "@reduxjs/toolkit";

const studioSlice = createSlice({
  name: "studio",
  initialState: {
    allStudio: [],
    detailStudio: {},
    bookingStudio: {},
    isFetching: false,
    error: false,
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
    studioPostStart: (state) => {
      state.isFetching = true;
    },
    studioPostAccepted: (state) => {
      state.isFetching = false;
    },
    studioPostFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    studioPutStart: (state) => {
      state.isFetching = true;
    },
    studioPutAccepted: (state) => {
      state.isFetching = false;
    },
    studioPutFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  studioStart,
  studioDetailStart,
  studioBookingStart,
  studioPostStart,
  studioPostAccepted,
  studioPostFailure,
  studioPutStart,
  studioPutAccepted,
  studioPutFailure,
} = studioSlice.actions;
export default studioSlice.reducer;
