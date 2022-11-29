import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { congViecServices } from "../../services/CongViecServices";
import { NguoiDungServices } from "../../services/NguoiDungServices";

const initialState = {
  jobsList: [],
  itemRender: [],
  jobDetail: [],
  jobType: [],
  jobTypeDetail: [],
  dataSignUp1: [],
  workList:[],
  isFetchingJobList: false,
  isFetchingItem: false,
  isFetchingJobDetail: false,
  isFetchingjobType: false,
  isFetchingjobTypeDetail: false,
  isFetchingWorkList: false,
  isFetchingAddJob:false,
  isFetchingEditJob:false
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
        })
        // get job details
        .addCase(layCongViecChiTiet.pending, (state) => {
          state.isFetchingJobDetail = true;
        })
        .addCase(layCongViecChiTiet.fulfilled, (state, action) => {
          state.isFetchingJobDetail = false;
          state.jobDetail = action.payload;
        })
        .addCase(layCongViecChiTiet.rejected, (state, action) => {
          state.isFetchingJobDetail = false;
          state.jobDetail = action.payload;
        })
        // getTypeWork
        .addCase(getTypeWork.pending, (state) => {
          state.isFetchingjobType = true;
        })
        .addCase(getTypeWork.fulfilled, (state, action) => {
          state.isFetchingjobType = false;
          state.jobType = action.payload;
        })
        .addCase(getTypeWork.rejected, (state, action) => {
          state.isFetchingjobType = false;
          state.jobType = action.payload;
        })
        // getTypeWorkDetail
        .addCase(getTypeWorkDetail.pending, (state) => {
          state.isFetchingjobTypeDetail = true;
        })
        .addCase(getTypeWorkDetail.fulfilled, (state, action) => {
          state.isFetchingjobTypeDetail = false;
          state.jobTypeDetail = action.payload;
        })
        .addCase(getTypeWorkDetail.rejected, (state, action) => {
          state.isFetchingjobTypeDetail = false;
          state.jobTypeDetail = action.payload;
        })
         // getWorkList(admin)
         .addCase(getWork.pending, (state) => {
          state.isFetchingWorkList = true;
        })
        .addCase(getWork.fulfilled, (state, action) => {
          state.isFetchingWorkList = false;
          state.workList = action.payload;
        })
        .addCase(getWork.rejected, (state, action) => {
          state.isFetchingWorkList = false;
          state.workList = action.payload;
        })
        //
        .addCase(postWork.pending, (state) => {
          state.isFetchingAddJob = false;
        })

        .addCase(postWork.fulfilled, (state, action) => {
          state.isFetchingAddJob = true;
        })
        .addCase(postWork.rejected, (state, action) => {
          state.isFetchingAddJob = false;
        })
        .addCase(editWork.pending, (state) => {
          state.isFetchingEditJob = false;
        })

        .addCase(editWork.fulfilled, (state, action) => {
          state.isFetchingEditJob = true;
        })
        .addCase(editWork.rejected, (state, action) => {
          state.isFetchingEditJob = false;
        })
        ;
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

export const layCongViecChiTiet = createAsyncThunk(
  "congViec/layCongViecChiTiet",
  async (id) => {
    try {
      const result = await congViecServices.layCongViecChiTiet(id);
      console.log(result.data.content);
      return result.data.content;
    } catch (err) {
      console.log(err.response.data);
    }
  }
);
export const getTypeWork = createAsyncThunk(
  "congViec/getTypeWork",
  async (key) => {
    try {
      const result = await congViecServices.getTypeWork(key);
      return result.data.content;
    } catch (err) {
      console.log(err.response.data);
    }
  }
);

export const getTypeWorkDetail = createAsyncThunk(
  "congViec/getTypeWorkDetail",
  async (type) => {
    try {
      const result = await congViecServices.getTypeWorkDetail(type);
      return result.data.content;
    } catch (err) {
      console.log(err.response.data);
    }
  }
);
export const getWork = createAsyncThunk(
  "congViec/getWork",
  async () => {
    try {
      const result = await congViecServices.getWork();
      return result.data.content;
    } catch (err) {
      console.log(err.response.data);
    }
  }
);
export const deleteWork = createAsyncThunk(
  "congViec/deleteWork",
  async (data,{dispatch}) => {
    try {
      const result = await congViecServices.deleteWork(data);
      alert("thành công")
     await dispatch(getWork())
      return result.data.content;
    } catch (err) {
      console.log(err.response.data);
    }
  }
);
export const postWork = createAsyncThunk(
  "congViec/postWork",
  async (data,{dispatch}) => {
    try {
      const result = await congViecServices.postWork(data);
      await dispatch(getWork())
      alert('Success')
      return result.data.content;
    } catch (err) {
      console.log(err.response.data);
    }
  }
);
export const editWork = createAsyncThunk(
  "congViec/editWork",
  async (data,{dispatch}) => {
    try {
      const result = await congViecServices.editWork(data);
      await dispatch(getWork())
      return result.data.content;
    } catch (err) {
      console.log(err.response.data);
    }
  }
);

