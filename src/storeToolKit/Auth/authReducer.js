import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { authService } from "../../services/AuthService";

const initialState = {
  isFetchingSignIn: false,
  userInfo: [],
};

export const { reducer: authReducer, actions: authActions } = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signIn.pending, (state, action) => {
        state.isFetchingSignIn = true;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.isFetchingSignIn = true;
        state.userInfo = action.payload;
      })
      .addCase(signIn.rejected, (state, action) => {
        state.isFetchingSignIn = true;
        state.userInfo = action.payload;
      });
  },
});

export const signIn = createAsyncThunk("auth/signIn", async (data) => {
  try {
    const result = await authService.signIn(data);
    localStorage.setItem("userLogin", JSON.stringify(result.data.content.user));
    localStorage.setItem("token", JSON.stringify(result.data.content.token));
    console.log("result", result.data.content);
    alert("thành công");
    return result.data.content.user;
  } catch (err) {
    console.log(err.response.data);
  }
});
