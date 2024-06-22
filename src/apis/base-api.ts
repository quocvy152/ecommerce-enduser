import Axios from "axios";
import { BASE_URL } from "./constant";

const API = Axios.create({
  baseURL: BASE_URL.PRODUCTION,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

// Add a response interceptor
API.interceptors.response.use(
  function (response) {
    // Do something with response data
    return response;
  },
  function (error) {
    return error.response;
  }
);

export default API;
