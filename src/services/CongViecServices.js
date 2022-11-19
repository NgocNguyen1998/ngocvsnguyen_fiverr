import { api } from "../constants/api";

export const congViecServices = {
  menuCongViec: () => {
    return api.get(`cong-viec/lay-menu-loai-cong-viec`);
  },
  congViecPhanTrangTimKiem: (data) => {
    return api.get(
      // `cong-viec`
      `cong-viec/phan-trang-tim-kiem?pageIndex=${data}&pageSize=12`
    );
  },
  layCongViecChiTiet: (id) => {
    return api.get(`cong-viec/lay-cong-viec-chi-tiet/${id}`);
  },
};
