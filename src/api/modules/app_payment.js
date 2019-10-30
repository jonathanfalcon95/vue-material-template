import { apiHttp } from "../axiosApi.js";
import { appPaymentPath } from "../config/apiRoute.js";

export const createPaymentApi = body =>
  apiHttp("POST", `${appPaymentPath}`, body);
