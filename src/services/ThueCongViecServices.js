import { api } from "../constants/api";

export const thueCongViecServices = {
  thueCongViec: () => {
    return api.post(`thue-cong-viec`);
  },
};
