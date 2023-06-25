import axiosInstance from "./axiosInstance";

const tokenApi = {
  requestToken: (data: { username: string; password: string }): Promise<string> => {
    return axiosInstance.post("/auth/login", {
      username: data.username,
      password: data.password,
    });
  },
};

export default tokenApi;
