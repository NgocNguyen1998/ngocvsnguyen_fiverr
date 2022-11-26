import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { NguoiDungServices } from "../../services/NguoiDungServices";

const initialState = {
  infoUser: {},
  isFetchinginfoUser: false,
};
export const { reducer: nguoiDungReducer, actions: nguoiDungActions } =
  createSlice({
    name: "NguoiDung",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        // getiFnoUser
        .addCase(getInfoUser.pending, (state) => {
          state.isFetchinginfoUser = true;
        })
        .addCase(getInfoUser.fulfilled, (state, action) => {
          state.isFetchinginfoUser = false;
          state.infoUser = action.payload;
        })
        .addCase(getInfoUser.rejected, (state, action) => {
          state.isFetchinginfoUser = false;
          state.infoUser = action.payload;
        });
    },
  });
export const getInfoUser = createAsyncThunk(
  "NguoiDung/getInfoUser",
  async (id) => {
    try {
      const result = await NguoiDungServices.getInfoUser(id);

      return result.data.content;
    } catch (err) {
      console.log(err.response.data);
    }
  }
);
export const editInfoUser = createAsyncThunk(
  "NguoiDung/editInfoUser",
  async (data) => {
    try {
      const result = await NguoiDungServices.editInfoUser(data);
      console.log('ket qua',result.data.content);
      return result.data.content;
    } catch (err) {
      console.log(err.response.data);
    }
  }
);
