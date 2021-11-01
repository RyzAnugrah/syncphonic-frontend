import { createSlice } from "@reduxjs/toolkit";

const memberSlice = createSlice({
  name: "member",
  initialState: {
    allMember: [],
  },
  reducers: {
    memberStart: (state, action) => {
      state.allMember = action.payload;
    },
  },
});

export const { memberStart } = memberSlice.actions;
export default memberSlice.reducer;
