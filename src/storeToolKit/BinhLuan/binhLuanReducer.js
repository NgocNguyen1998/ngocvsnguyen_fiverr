import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { binhLuanService } from "../../services/BinhLuanServies";
import { congViecServices } from "../../services/CongViecServices";

const initialState = {
  commentByJob: [],
  isFetchingCmtByJob: false,
};
export const { reducer: binhLuanReducer, actions: binhLuanActions } =
  createSlice({
    name: "binhLuan",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(binhLuanTheoCongViec.pending, (state) => {
          state.isFetchingCmtByJob = true;
        })
        .addCase(binhLuanTheoCongViec.fulfilled, (state, action) => {
          state.isFetchingCmtByJob = false;
          state.commentByJob = action.payload;
        })
        .addCase(binhLuanTheoCongViec.rejected, (state, action) => {
          state.isFetchingCmtByJob = false;
          state.commentByJob = action.payload;
        });
    },
  });

export const binhLuanTheoCongViec = createAsyncThunk(
  "binhLuan/binhLuanTheoCongViec",
  async (id) => {
    try {
      const result = await binhLuanService.binhLuanTheoCongViec(id);
      console.log("RESULT", result.data.content);
      return result.data.content;
    } catch (err) {
      console.log(err.response.data);
    }
  }
);

export const postBinhLuan = createAsyncThunk(
  "binhLuan/postBinhLuan",
  async (data, { dispatch }) => {
    try {
      const result = await binhLuanService.postBinhLuan(data);
      console.log("data", data);
      console.log("result", result.data.content);
      // await dispatch(binhLuanTheoCongViec(data.id));
      // console.log(data.idNum);
      alert("thành công");
      return result.data.content;
    } catch (err) {
      console.log(err.response.data);
    }
  }
);
