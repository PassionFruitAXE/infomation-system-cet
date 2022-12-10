import request from "@/utils/request";
import { TBaseResponse } from "@/types/axios";

export function sendCaptchaCode(email: string) {
  return request.post<TBaseResponse<null>>("/pri/notify/send_code", {
    captcha: "0000",
    to: email,
  });
}
