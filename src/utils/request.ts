import axios from "axios";
import { getItem } from "./storage";
import { message } from "antd";

const request = axios.create({
  // baseURL: "http://127.0.0.1:4523/mock/1712441/api/v1",
  baseURL: "http://152.136.201.38:8005/api/v1",
  headers: {
    token: getItem("token") as string,
  },
});

request.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

request.interceptors.response.use(
  response => {
    const { code, msg } = response.data;
    if ((code >= 200 && code < 300) || code === 0) {
      return response;
    } else {
      message.error(msg || "未知错误");
      return Promise.reject(response);
    }
  },
  error => {
    message.error(error?.response?.data?.msg || error.message);
    return Promise.reject(error);
  }
);

export default request;
