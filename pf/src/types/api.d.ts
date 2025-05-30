/* eslint-disable no-undef */
import { AxiosRequestConfig } from "axios";

export type ParameterType = {
  [key: string]:
    | string
    | number
    | Array<string>
    | Array<number>
    | undefined
    | null;
};

type ContentType =
  | string
  | number
  | boolean
  | File
  | Array<string>
  | Array<number>
  | Array<File>
  | undefined
  | null;

export type BodyContentType =
  | {
      [key: string]: ContentType | { [key: string]: ContentType };
    }
  | FormData;

interface CreateRequest {
  method: AxiosRequestConfig["method"];
  params?: ParameterType;
  body?: BodyContentType;
  rowData?: boolean;
  needHeader?: boolean;
}

declare type Instance = (args: CreateRequest) => Promise<T>;
declare type RequestFunction<Argument = void, Response = any> = (
  args: Argument
) => Promise<Response>;

export type { Instance, RequestFunction };
