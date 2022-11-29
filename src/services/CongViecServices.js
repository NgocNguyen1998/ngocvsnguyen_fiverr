import { api } from "../constants/api";

export const congViecServices = {
  menuCongViec: () => {
    return api.get(`cong-viec/lay-menu-loai-cong-viec`);
  },
  congViecPhanTrangTimKiem: (data) => {
    return api.get(`cong-viec/phan-trang-tim-kiem?pageIndex=${data}&pageSize=12`);
  },
  layCongViecChiTiet: (id) => {
    return api.get(`cong-viec/lay-cong-viec-chi-tiet/${id}`);
  },
  getTypeWork: (key) => {
    return api.get(`cong-viec/lay-chi-tiet-loai-cong-viec/${key}`);
  },
  getTypeWorkDetail: (type) => {
    return api.get(`cong-viec/lay-cong-viec-theo-chi-tiet-loai/${type}`);
  },
  getWork: () => {
    return api.get(`cong-viec`);
  },
  deleteWork: (id) => {
    return api.delete(`cong-viec/${id}`);
  },
  postWork: (data) => {
    return api.post(`cong-viec`,data);
  },
  editWork: (data) => {
    return api.put(`cong-viec/${data.id}`,data);
  },
  searchWork: (data) => {
    return api.get(`cong-viec/lay-danh-sach-cong-viec-theo-ten/${data}`);
  },
};
