import { api } from "../constants/api";
export const chiTietLoaiCongViecServices = {
  JobDetail: (id) => {
    if (!id.trim()) {
      return api.getJobDetail(`chi-tiet-loai-cong-viec`);
    }
    return api.getJob(`chi-tiet-loai-cong-viec/${id}`);
  },
  postJobDetail: (data) => {
    return api.post(`chi-tiet-loai-cong-viec`, data);
  },
  putJobDetail: (data) => {
    return api.put(`chi-tiet-loai-cong-viec/${data.id}`, data);
  },
  deleteJobDetail: (id) => {
    return api.delete(`chi-tiet-loai-cong-viec/${id}`);
  },
};
