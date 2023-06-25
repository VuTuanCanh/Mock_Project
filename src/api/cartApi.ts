import { ICart } from "../types/cartType";
import axiosInstance from "./axiosInstance";

const cartApi = {
  getAllCarts: (): Promise<ICart[]> => {
    return axiosInstance.get("carts");
  },
  getASingleCart: (cartId: number): Promise<ICart> => {
    return axiosInstance.get(`carts/${cartId}`);
  },
};

export default cartApi;
