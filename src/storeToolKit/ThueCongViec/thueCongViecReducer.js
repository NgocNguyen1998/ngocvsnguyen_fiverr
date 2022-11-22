import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { thueCongViecServices } from "../../services/ThueCongViecServices";

const initialState = {};
export const { reducer: thueCongViecReducer, actions: thueCongViecActions } =
  createSlice({
    name: "thueCongViec",
    initialState,
    reducers: {},
    extraReducers: (builder) => {},
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
