import { api } from "../constants/api";

export const authService = {
  signIn: (data) => {
    return api.post(`auth/signin`, data);
  },
};
