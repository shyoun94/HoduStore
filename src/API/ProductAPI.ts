import { UploadProducts } from "types/type";
import { accessDataInstance, accessInstance, instance } from "./instance";

export const GetFullProduct = async (n: number) => {
  try {
    const res = await instance.get(`/products/?page=${n}`);
    return res;
  } catch (err) {
    throw err;
  }
};

export const PostProduct = async (Products: UploadProducts) => {
  try {
    const res = await accessDataInstance.post(`/products/`, {
      product_name: Products.product_name,
      image: Products.image,
      price: Products.price,
      shipping_method: Products.shipping_method, // PARCEL 또는 DELIVERY 선택
      shipping_fee: Products.shipping_fee,
      stock: Products.stock,
      product_info: Products.product_info,
    });
    return res;
  } catch (err) {
    throw err;
  }
};
export const GetSellerProduct = async () => {
  try {
    const res = await accessInstance.get(`/seller/`);
    return res;
  } catch (err) {
    throw err;
  }
};
export const DeleteProduct = async (product_id: number) => {
  try {
    const res = await accessInstance.delete(`/products/${product_id}/`);
    return res;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
export const DetailProduct = async (product_id: number) => {
  try {
    const res = await instance.get(`/products/${product_id}/`);
    return res;
  } catch (err) {
    throw err;
  }
};
export const EditProductAPI = async (Products: UploadProducts) => {
  try {
    const res = await accessDataInstance.put(
      `/products/${Products.product_id}/`,
      {
        product_name: Products.product_name,
        price: Products.price,
        shipping_method: Products.shipping_method,
        shipping_fee: Products.shipping_fee,
        stock: Products.stock,
        product_info: Products.product_info,
      }
    );
    return res;
  } catch (err) {
    throw err;
  }
};

export const SearchAPI = async (keyword: string, page: number) => {
  try {
    const res = await instance.get(`/products/?page=${page}&search=${keyword}`);
    return res;
  } catch (err) {
    throw err;
  }
};
