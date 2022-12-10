import axios from "axios";
import { getItem } from "./storage";

const request = axios.create({
  baseURL: "http://127.0.0.1:4523/mock/1712441/api/v1",
  headers: {
    token: getItem("token") as string,
  },
});

export default request;
