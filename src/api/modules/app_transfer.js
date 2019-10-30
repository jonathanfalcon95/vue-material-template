import { apiHttp } from "../axiosApi.js";
import { appTransferPath } from "../config/apiRoute.js";

export const createTransferApi = body =>
  apiHttp("POST", `${appTransferPath}`, body);
