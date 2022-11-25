import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { authService } from "../../services/AuthService";

const initialState = {
  isFetchingSignIn: false,
  isFetchingSignUp: false,
  userInfo: [],
  dataSignUp:[],
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
        state.isFetchingSignIn = false;
        state.userInfo = action.payload;
      })
      .addCase(signIn.rejected, (state, action) => {
        state.isFetchingSignIn = false;
        state.userInfo = action.payload;
      })
      .addCase(signUp.pending, (state, action) => {
        state.isFetchingSignUp = true;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.isFetchingSignUp = true;
        state.dataSignUp.push(action.payload) ;
        localStorage.setItem("dataSignUp", JSON.stringify(state.dataSignUp))
      })
      .addCase(signUp.rejected, (state) => {
        state.isFetchingSignUp = true;
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

export const signUp = createAsyncThunk("auth/signUp", async (data) => {
  try {
    const result = await authService.signUp(data);
    alert("thành công");
    return result.data.content
  } catch (err) {
    console.log(err.response.data);
    alert(err.response.data.content);
  }
});
