/** @format */

import instance from "../axios";
import store from "../store";
import {
  allCategories,
  removeItem,
  clearCart,
  addItem,
} from "../store/slices/cart-slice";

export const getCategories = () => {
  return instance
    .get(`/getCategories.json`)
    .then((res) => {
      // store.dispatch(allCategories(res.data.result))
      return res.data.result;
    })
    .catch((e) => console.log(e));
};

export const getSubCategories = ({ category_id }) => {
  return instance
    .get(`/getSubCategory_${category_id}.json`)
    .then((res) => {
      return res.data.result;
      // store.dispatch(allCategories(res.data.result))
    })
    .catch((e) => console.log(e));
};

export const getAllProducts = ({ subCategory_id }) => {
  return instance
    .get(`/getProduct_${subCategory_id}.json`)
    .then((res) => {
      return res?.data?.result;
      // store.dispatch(allCategories(res.data.result))
    })
    .catch((e) => console.log(e));
};

export const addToCartStore = ({ data }) => {
  store.dispatch(addItem(data));
};

export const clearWholeCart = () => {
  store.dispatch(clearCart());
};
