import { api } from "../constants/api";
export const loaiCongViecServices = {
  jobType: (id) => {
    if (!id.trim()) {
      return api.get(`loai-cong-viec`);
    }
    return api.get(`loai-cong-viec/${id}`);
  },
  postJobType: () => {
    return api.post(`loai-cong-viec`);
  },
  deleteJobType: (id) => {
    return api.delete(`loai-cong-viec/${id}`);
  },
  putJobType: (id) => {
    return api.put(`loai-cong-viec/${id}`);
  },
};
