import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { thueCongViecServices } from "../../services/ThueCongViecServices";

const initialState = {
  rentList:[],
  isFetchingRentList: false,
};
export const { reducer: thueCongViecReducer, actions: thueCongViecActions } =
  createSlice({
    name: "thueCongViec",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
      // getiFnoUser
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
  async () => {
    try {
      const result = await thueCongViecServices.getRentList();
      console.log(" enlist: ",  result.data.content);
      return result.data.content
    
    } catch (err) {
      console.log(err.response.data);
    }
  }
);

