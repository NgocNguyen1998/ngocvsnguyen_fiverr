import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { NguoiDungServices } from "../../services/NguoiDungServices";

const initialState = {
  infoUser: {},
  isFetchinginfoUser: false,
  usersList: [],
  isFetchingUsersList: false,
  isFetchingSearch: false,
  user: [],
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
        })
        // get userList
        .addCase(getUSerList.pending, (state) => {
          state.isFetchingUsersList = true;
        })
        .addCase(getUSerList.fulfilled, (state, action) => {
          state.isFetchingUsersList = false;

          state.usersList = action.payload;
        })
        .addCase(getUSerList.rejected, (state, action) => {
          state.isFetchingUsersList = false;

          state.usersList = action.payload;
        })
        // search user
        .addCase(searchUser.pending, (state) => {
          state.isFetchingSearch = true;
        })
        .addCase(searchUser.fulfilled, (state, action) => {
          state.isFetchingSearch = false;
          state.user = action.payload;
        })
        .addCase(searchUser.rejected, (state, action) => {
          state.isFetchingSearch = false;
          state.user = action.payload;
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
      console.log("ket qua", result.data.content);
      return result.data.content;
    } catch (err) {
      console.log(err.response.data);
    }
  }
);

export const getUSerList = createAsyncThunk(
  "NguoiDung/getUserList",
  async (id = "") => {
    try {
      const result = await NguoiDungServices.getUserList(id);
      console.log(result.data.content);
      return result.data.content;
    } catch (err) {
      console.log(err.response.data.content);
    }
  }
);

export const putUser = createAsyncThunk("NguoiDung/putUser", async (id) => {
  try {
    const result = await NguoiDungServices.putUser(id);
    console.log(result.data.content);
    alert("thành công");
  } catch (err) {
    console.log(err.response.data);
    alert(err.response.data);
  }
});

export const searchUser = createAsyncThunk(
  "NguoiDung/searchUser",
  async (id) => {
    try {
      const result = await NguoiDungServices.searchUser(id);
      console.log(result.data.content);
      return result.data.content;
    } catch (err) {
      console.log(err.response.data);
    }
  }
);
export const deleteUser = createAsyncThunk(
  "NguoiDung/deleteUser",
  async (id, { dispatch }) => {
    try {
      const result = await NguoiDungServices.deleteUser(id);
      console.log(result.data.content);
      alert("thành công");
      dispatch(getUSerList());
    } catch (err) {
      console.log(err.response.data.content);
    }
  }
);

export const postUser = createAsyncThunk("NguoiDung/postUser", async (data) => {
  try {
    const result = await NguoiDungServices.postUser(data);
    console.log(result.data.content);
    alert("thành công");
  } catch (err) {
    console.log(err.response.data);
  }
});
