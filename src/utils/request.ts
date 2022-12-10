import axios from "axios";

const request = axios.create({
  baseURL: "http://127.0.0.1:4523/mock/1712441/api/v1",
});

export default request;
