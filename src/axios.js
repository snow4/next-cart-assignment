/** @format */

import axios from "axios";
import store from "./store";
import { LoaderVisiblity } from "./store/slices/cart-slice";

const baseURL = "https://elredtest.s3.amazonaws.com/reactAssignment";

const instance = axios.create({
  baseURL,
});

instance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    store.dispatch(LoaderVisiblity(true));
    return config;
  },
  function (error) {
    // Do something with request error
    store.dispatch(LoaderVisiblity(false));

    return Promise.reject(error);
  }
);

// Add a response interceptor
instance.interceptors.response.use(
  function (response) {
    store.dispatch(LoaderVisiblity(false));

    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    store.dispatch(LoaderVisiblity(false));

    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export default instance;
