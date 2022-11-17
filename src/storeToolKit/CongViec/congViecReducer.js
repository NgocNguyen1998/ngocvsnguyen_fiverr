import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import React from "react";
import { congViecServices } from "../../services/CongViecServices";

const initialState = {
  jobsList: [],
  isFetchingJobList: false,
  isFetchingItem: false,
  itemRender: [],
};
export const { reducer: congViecReducer, actions: congViecActions } =
  createSlice({
    name: "congViec",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        // get job list
        .addCase(menuCongViec.pending, (state) => {
          state.isFetchingJobList = true;
        })
        .addCase(menuCongViec.fulfilled, (state, action) => {
          state.isFetchingJobList = false;
          state.jobsList = action.payload;
        })
        .addCase(menuCongViec.rejected, (state, action) => {
          state.isFetchingJobList = false;
          state.jobsList = action.payload;
        })
        //
        .addCase(congViecPhanTrangTimKiem.pending, (state) => {
          state.isFetchingItem = true;
        })
        .addCase(congViecPhanTrangTimKiem.fulfilled, (state, action) => {
          state.isFetchingItem = false;
          state.itemRender = action.payload;
        })
        .addCase(congViecPhanTrangTimKiem.rejected, (state, action) => {
          state.isFetchingItem = false;
          state.itemRender = action.payload;
        });
    },
  });
export const menuCongViec = createAsyncThunk(
  "congViec/menuCongViec",
  async (data) => {
    try {
      const result = await congViecServices.menuCongViec();
      console.log(result.data.content);
      return result.data.content;
    } catch (err) {
      console.log(err.response.data);
    }
  }
);

export const congViecPhanTrangTimKiem = createAsyncThunk(
  "congViec/congViecPhanTrangTimKiem",
  async (data) => {
    try {
      const result = await congViecServices.congViecPhanTrangTimKiem(data);
      console.log(result.data.content.data);
      return result.data.content.data;
    } catch (err) {
      console.log(err.response.data.content);
    }
  }
);
