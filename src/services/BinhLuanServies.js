import { api } from "../constants/api";

export const binhLuanService = {
  binhLuanTheoCongViec: (id) => {
    return api.get(`binh-luan/lay-binh-luan-theo-cong-viec/${id}`);
  },
  postBinhLuan: (data) => {
    return api.post(`binh-luan`, data);
  },
};
