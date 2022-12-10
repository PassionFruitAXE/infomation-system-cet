import { TBaseResponse } from "@/types/axios";
import request from "@/utils/request";

export function login(data: { pwd: string; mail: string }) {
  return request.post<TBaseResponse<{ token: string }>>(
    "/pri/user/login",
    data
  );
}

export function register(data: {
  code: string;
  mail: string;
  pwd: string;
  examineeName: string;
}) {
  return request.post("/pri/user/register", data);
}

export function retrieve(data: { newPwd: string; code: string; mail: string }) {
  return request.post("/pri/user/retrieve", data);
}

export function getUserInfo() {
  return request.get<
    TBaseResponse<{
      examineeIdNumber: number;
      examineeStudentId: number;
      headImg: string;
      mail: string;
      examineeName: string;
      gender: number;
    }>
  >("/pri/user/findInfoByMail");
}
