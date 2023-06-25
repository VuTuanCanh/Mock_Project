import { IProduct } from "../types/productType";
import axiosInstance from "./axiosInstance";

const productApi = {
  getAllProducts: (): Promise<IProduct[]> => {
    return axiosInstance.get("products");
  },
  getASingleProduct: (productId: number): Promise<IProduct> => {
    return axiosInstance.get(`products/${productId}`);
  },
};

export default productApi;
