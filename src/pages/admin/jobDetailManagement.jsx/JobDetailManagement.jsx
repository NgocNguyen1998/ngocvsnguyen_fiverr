import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getJobDetail } from "../../../storeToolKit/ChiTietLoaiCongViec/chiTietLoaiCongViecReducer";
import { useJobDetail } from "../../../storeToolKit/ChiTietLoaiCongViec/chiTietLoaiSelector";

export const JobDetailManagement = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getJobDetail());
  });
  const { jobDetails } = useJobDetail();
  console.log(jobDetails);
  return <div>JobDetailManagement</div>;
};
