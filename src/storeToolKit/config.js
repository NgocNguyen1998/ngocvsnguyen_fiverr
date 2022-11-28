import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import thunk from "redux-thunk";
import { binhLuanReducer } from "./BinhLuan";
import { congViecReducer } from "./CongViec/congViecReducer";
import { thueCongViecReducer } from "./ThueCongViec";
import { nguoiDungReducer } from "./NguoiDung";
import { authReducer } from "./Auth";
import { loaiCongViecReducer } from "./LoaiCongViec/loaiCongViecReducer";

const rootReducer = combineReducers({
  congViecReducer,
  binhLuanReducer,
  thueCongViecReducer,
  nguoiDungReducer,
  authReducer,
  loaiCongViecReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
  devTools: true,
});
