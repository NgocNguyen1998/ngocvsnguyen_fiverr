import { api } from "../constants/api";

export const NguoiDungServices = {
  getInfoUser: (id) => {
    return api.get(`users/${id}`);
  },
  editInfoUser: (id,data) => {
    return api.put(`users/${id}`,data);
  },
};
