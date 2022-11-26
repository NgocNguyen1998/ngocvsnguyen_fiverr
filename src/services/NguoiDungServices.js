import { api } from "../constants/api";

export const NguoiDungServices = {
  getInfoUser: (id) => {
    return api.get(`users/${id}`);
  },
  editInfoUser: (data) => {
    if(data){
      return api.put(`users/${data.id}`,data);
    }
    }
    
};
