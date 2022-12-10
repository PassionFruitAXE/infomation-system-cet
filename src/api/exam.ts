import request from "@/utils/request";
import { TBaseResponse } from "@/types/axios";

export function getExam(page: number, size: number) {
  return request.post<
    TBaseResponse<{
      total_page: number;
      total_record: number;
      current_data: {
        id: number;
        examTitle: string;
        price: number;
        startTime: string;
        endTime: string;
        stock: number;
        state: string;
        examStartTime: string;
      }[];
    }>
  >("/pri/exam/page", { page, size });
}
