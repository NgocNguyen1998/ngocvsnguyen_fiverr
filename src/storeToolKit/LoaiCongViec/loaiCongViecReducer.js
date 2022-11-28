import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loaiCongViecServices } from "../../services/LoaiCongViecServices";

const initialState = {
  isFetchingJobType: false,
  jobType: [],
};

export const { reducer: loaiCongViecReducer, actions: loaiCongViecActions } =
  createSlice({
    name: "loaiCongViec",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(jobsType.pending, (state) => {
          state.isFetchingJobType = true;
        })
        .addCase(jobsType.fulfilled, (state, action) => {
          state.isFetchingJobType = true;
          state.jobType = action.payload;
        })
        .addCase(jobsType.rejected, (state, action) => {
          state.isFetchingJobType = true;
          state.jobType = action.payload;
        });
    },
  });

export const jobsType = createAsyncThunk(
  "loaiCongViec/jobType",
  async (id = "") => {
    try {
      const result = await loaiCongViecServices.jobType(id);
      console.log(result.data.content);
      return result.data.content;
    } catch (err) {
      console.log(err.response.data.content);
    }
  }
);

export const postJobType = createAsyncThunk(
  "loaiCongViec/postJobType",
  async (job) => {
    try {
      const result = await loaiCongViecServices.postJobType(job);
      console.log(result.data.content);
    } catch (err) {
      console.log(err.response.data.content);
    }
  }
);

export const deleteJobType = createAsyncThunk(
  "loaiCongViec/deleteJobType",
  async (id) => {
    try {
      const result = await loaiCongViecServices.deleteJobType(id);
      console.log(result.data.content);
    } catch (err) {
      console.log(err.response.data.content);
    }
  }
);

export const putJobType = createAsyncThunk(
  "loaiCongViec/putJobType",
  async (id) => {
    try {
      const result = await loaiCongViecServices.putJobType(id);
      console.log(result.data.content);
    } catch (err) {
      console.log(err.response.data.content);
    }
  }
);
