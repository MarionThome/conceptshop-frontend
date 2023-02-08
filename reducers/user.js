import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    username : "", 
    token : ""
  },
};

export const userSlice = createSlice({
  name: "user",

  initialState,
  reducers: {
    addUser: (state, action) => {
        state.value = {
          username : action.payload.username, 
          token : action.payload.token
        }
    },
   resetUser : (state, action) => {
    state.value = {
      username : "", 
      token : ""
    }
   }
  },
});

export const {
  addUser, resetUser
  
} = userSlice.actions;
export default userSlice.reducer;
