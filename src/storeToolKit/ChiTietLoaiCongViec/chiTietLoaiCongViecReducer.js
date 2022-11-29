import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { chiTietLoaiCongViecServices } from "../../services/ChiTietLoaiCongViecServices";

const initialState = {
  isFetchingJobDetail: false,
  jobDetails: [],
};

export const {
  reducer: chiTietLoaiCongViecReducer,
  actions: chiTietLoaiCongViecActions,
} = createSlice({
  name: "chiTietLoai",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getJobDetail.pending, (state) => {
        state.isFetchingJobDetail = true;
      })
      .addCase(getJobDetail.fulfilled, (state, action) => {
        state.isFetchingJobDetail = true;
        state.JobDetails = action.payload;
      })
      .addCase(getJobDetail.rejected, (state, action) => {
        state.isFetchingJobDetail = true;
        state.JobDetails = action.payload;
      });
  },
});

export const getJobDetail = createAsyncThunk(
  "chiTietLoai/getJobDetail",
  async (id = "") => {
    try {
      const result = await chiTietLoaiCongViecServices.JobDetail(id);
      console.log(result.data.content);
      return result.data.content;
    } catch (err) {
      console.log(err.response.data.content);
    }
  }
);
