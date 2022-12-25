import { TBaseResponse } from "./../types/axios";
import request from "@/utils/request";

export function confirmOrder(data: {
  examId: number;
  clientType: string;
  payType: string;
  price: number;
  province: string;
  city: string;
  school: string;
}) {
  return request.post<TBaseResponse<{ code_url: string }>>(
    "/pri/order/confirm",
    data
  );
}
