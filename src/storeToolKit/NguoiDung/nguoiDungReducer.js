import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { nguoiDungServices } from "../../services/NguoiDungServices";

const initialState = {
  isFetchingUsersId: false,
  userId: [],
};
export const { reducer: nguoiDungReducer, actions: nguoiDungActions } =
  createSlice({
    name: "nguoiDung",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(usersId.pending, (state, action) => {
          state.isFetchingUsersId = true;
        })
        .addCase(usersId.fulfilled, (state, action) => {
          state.isFetchingUsersId = true;
          state.userId = action.payload;
        })
        .addCase(usersId.rejected, (state, action) => {
          state.isFetchingUsersId = true;
          state.userId = action.payload;
        });
    },
  });

export const usersId = createAsyncThunk("nguoiDung/usersId", async (data) => {
  try {
    const result = await nguoiDungServices.usersId(data);
    console.log(result.data.content);
    return result.data.content;
  } catch (err) {
    console.log(err.response.data);
  }
});
