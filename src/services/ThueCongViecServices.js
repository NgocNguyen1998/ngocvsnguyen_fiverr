import { api } from "../constants/api";

export const thueCongViecServices = {
  thueCongViecPost: (data) => {
    return api.post(`thue-cong-viec`, data);
  },
};
