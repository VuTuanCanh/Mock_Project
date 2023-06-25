import { IUserProfile } from "../types/userProfile";
import axiosInstance from "./axiosInstance";

const userApi = {
  getUserProfile: (id: string): Promise<IUserProfile> => {
    return axiosInstance.get(`/api/users/profile/${id}`);
  },
};

export default userApi;
