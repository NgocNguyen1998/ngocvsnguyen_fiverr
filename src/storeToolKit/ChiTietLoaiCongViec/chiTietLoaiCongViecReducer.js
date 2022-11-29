import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { chiTietLoaiCongViecServices } from "../../services/ChiTietLoaiCongViecServices";

const initialState = {
  isFetchingJobDetail: false,
  jobDetail: [],
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
        state.jobDetail = action.payload;
      })
      .addCase(getJobDetail.rejected, (state, action) => {
        state.isFetchingJobDetail = true;
        state.jobDetail = action.payload;
      });
  },
});

export const getJobDetail = createAsyncThunk(
  "chiTietLoai/getJobDetail",
  async (id = "") => {
    try {
      const result = await chiTietLoaiCongViecServices.jobDetail(id);
      console.log(result.data.content);
      return result.data.content;
    } catch (err) {
      console.log(err.response.data.content);
    }
  }
);
export const deleteJobDetail = createAsyncThunk(
  "chiTietLoai/deleteJobDetail",
  async (id, { dispatch }) => {
    try {
      const result = await chiTietLoaiCongViecServices.deleteJobDetail(id);
      console.log(result.data.content);
      alert("thành công");
      await dispatch(getJobDetail());
    } catch (err) {
      alert(err.response.data.content);
    }
  }
);

export const postJobTypeDetail = createAsyncThunk(
  "chiTietLoai/postJobDetail",
  async (data, { dispatch }) => {
    try {
      const result = await chiTietLoaiCongViecServices.postJobTypeDetail(data);
      console.log(result.data.content);
      alert("thành công");
      dispatch(getJobDetail());
    } catch (err) {
      alert(err.response.data.content);
    }
  }
);
export const putJobTypeDetail = createAsyncThunk(
  "chiTietLoai/postJobDetail",
  async (data, { dispatch }) => {
    try {
      const result = await chiTietLoaiCongViecServices.putJobTypeDetail(data);
      console.log(result.data.content);
      alert("thành công");
      dispatch(getJobDetail());
    } catch (err) {
      alert(err.response.data.content);
    }
  }
);

export const postImage = createAsyncThunk(
  "chiTietLoai/postImage",
  async (data, { dispatch }) => {
    try {
      console.log(data);
      const result = await chiTietLoaiCongViecServices.postImage(data);
      console.log(result.data.content);
      alert("thành công");
      dispatch(getJobDetail());
    } catch (err) {
      console.log(err.response.data.content);
    }
  }
);
