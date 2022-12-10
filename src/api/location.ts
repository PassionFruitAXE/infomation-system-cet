import request from "@/utils/request";
import { TBaseResponse } from "@/types/axios";

export function getProvince() {
  return request.get<TBaseResponse<string[]>>("/pub/address/findProvince");
}

export function getCity(province: string) {
  const urlSearchParams = new URLSearchParams();
  urlSearchParams.append("province", province);
  return request.get<TBaseResponse<string[]>>(
    `/pub/address/findByProvince?${urlSearchParams.toString()}`
  );
}

export function getSchool(province: string, city: string) {
  const urlSearchParams = new URLSearchParams();
  urlSearchParams.append("province", province);
  urlSearchParams.append("city", city);
  return request.get<TBaseResponse<string[]>>(
    `/pub/address/findSchool?${urlSearchParams.toString()}`
  );
}
