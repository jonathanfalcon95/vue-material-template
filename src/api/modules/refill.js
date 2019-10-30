import { apiHttp } from "../axiosApi.js";
import { refillPath } from "../config/apiRoute.js";

export const postRefillApi = body =>
  apiHttp("POST", `${refillPath}/express`, body);
