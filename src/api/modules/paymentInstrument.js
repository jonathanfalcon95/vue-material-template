import { apiHttp } from "../axiosApi.js";
import { paymentInstrumentPath } from "../config/apiRoute.js";

export const getPaymentInstrumentApi = () =>
  apiHttp("GET", `${paymentInstrumentPath}`);

export const postPaymentInstrumentApi = body =>
  apiHttp("POST", `${paymentInstrumentPath}`, body);

export const deletePaymentInstrumentApi = id =>
  apiHttp("DELETE", `${paymentInstrumentPath}/${id}`);

export const putDefaultPaymentInstrumentApi = id =>
  apiHttp("PUT", `${paymentInstrumentPath}/default/${id}`);
