import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import thunk from "redux-thunk";
import { binhLuanReducer } from "./BinhLuan";
import { congViecReducer } from "./CongViec/congViecReducer";
import { thueCongViecReducer } from "./ThueCongViec/thueCongViecReducer";

const rootReducer = combineReducers({
  congViecReducer,
  binhLuanReducer,
  thueCongViecReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
  devTools: true,
});
