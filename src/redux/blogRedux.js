import { createSlice } from "@reduxjs/toolkit";

const blogSlice = createSlice({
  name: "blog",
  initialState: {
    allBlog: [],
    detailBlog: {},
  },
  reducers: {
    blogStart: (state, action) => {
      state.allBlog = action.payload;
    },
    blogDetailStart: (state, action) => {
      state.detailBlog = action.payload;
    },
  },
});

export const { blogStart, blogDetailStart } = blogSlice.actions;
export default blogSlice.reducer;
