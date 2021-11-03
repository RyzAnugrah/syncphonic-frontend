import { createSlice } from "@reduxjs/toolkit";

const blogSlice = createSlice({
  name: "blog",
  initialState: {
    allBlog: [],
    detailBlog: {},
    isFetching: false,
    error: false,
  },
  reducers: {
    blogStart: (state, action) => {
      state.allBlog = action.payload;
    },
    blogDetailStart: (state, action) => {
      state.detailBlog = action.payload;
    },
    blogPostStart: (state) => {
      state.isFetching = true;
    },
    blogPostAccepted: (state) => {
      state.isFetching = false;
    },
    blogPostFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    blogPutStart: (state) => {
      state.isFetching = true;
    },
    blogPutAccepted: (state) => {
      state.isFetching = false;
    },
    blogPutFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  blogStart,
  blogDetailStart,
  blogPostStart,
  blogPostAccepted,
  blogPostFailure,
  blogPutStart,
  blogPutAccepted,
  blogPutFailure,
} = blogSlice.actions;
export default blogSlice.reducer;
