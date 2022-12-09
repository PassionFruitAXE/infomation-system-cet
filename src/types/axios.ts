export type TBaseResponse<T> = {
  code: number;
  msg: string;
  data: T;
};
