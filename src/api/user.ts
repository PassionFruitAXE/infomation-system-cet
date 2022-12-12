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

export type RegistrationInfo = {
  eaxmId: number;
  eaxmCardNumber: number;
  examineeIdNumber: string;
  examineeName: string;
  seatNumber: number;
  examRoomNumber: 68;
  addressName: string;
  mail: string;
};

export function getRegistrationInfo(id: string) {
  return request.get<TBaseResponse<RegistrationInfo>>(
    `/pri/user/viewRegistrationInfo/${id}`
  );
}
