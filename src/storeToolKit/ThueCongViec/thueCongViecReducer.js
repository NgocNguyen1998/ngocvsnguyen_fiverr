import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { thueCongViecServices } from "../../services/ThueCongViecServices";

const initialState = {
  rentList: [],
  isFetchingRentList: false,
};
export const { reducer: thueCongViecReducer, actions: thueCongViecActions } =
  createSlice({
    name: "thueCongViec",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
      builder
        // getinFoUser
        .addCase(getRentList.pending, (state) => {
          state.isFetchingRentList = true;
        })
        .addCase(getRentList.fulfilled, (state, action) => {
          state.isFetchingRentList = false;
          state.rentList = action.payload;
        })
        .addCase(getRentList.rejected, (state, action) => {
          state.isFetchingRentList = false;
          state.rentList = action.payload;
        })
    },
  });

export const thueCongViecPost = createAsyncThunk(
  "thueCongViec/thueCongViecPost",
  async (data) => {
    try {
      const result = await thueCongViecServices.thueCongViecPost(data);
      alert("thành công");
      console.log(result.data.content);
    } catch (err) {
      console.log(err.response.data);
    }
  }
);
export const getRentList = createAsyncThunk(
  "thueCongViec/getRentList",
  async (data, { dispatch, rejectWithValue }) => {
    try {
      const result = await thueCongViecServices.getRentList();
      return result.data.content
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);
export const deleteRentList = createAsyncThunk(
  "thueCongViec/deleteRentList",
  async (data, { dispatch, rejectWithValue }) => {
    try {
      const result = await thueCongViecServices.deleteRentList(data);
      await dispatch(getRentList())
      return result.data.content

    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

