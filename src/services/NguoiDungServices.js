import { api } from "../constants/api";

export const nguoiDungServices = {
  usersId: (data) => {
    return api.get(`users/${data}`);
  },
};
