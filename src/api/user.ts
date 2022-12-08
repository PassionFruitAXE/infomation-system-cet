import request from "@/utils/request";

export function login(data: { pwd: string; mail: string }) {
  return request.post("/user/login", data);
}

export function register(data: {
  code: string;
  mail: string;
  pwd: string;
  examineeName: string;
}) {
  return request.post("/user/register", data);
}

export function retrieve(data: { newPwd: string; code: string; mail: string }) {
  return request.post("/user/retrieve", data);
}
