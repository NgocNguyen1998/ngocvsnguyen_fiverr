import { api } from "../constants/api";

export const congViecServices = {
  menuCongViec: () => {
    return api.get(`cong-viec/lay-menu-loai-cong-viec`);
  },
  congViec: () => {
    return api.get(`cong-viec`);
  },
};
