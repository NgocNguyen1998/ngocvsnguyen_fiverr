import { api } from "../constants/api";

export const NguoiDungServices = {
  getInfoUser: (id) => {
    return api.get(`users/${id}`);
  },
};