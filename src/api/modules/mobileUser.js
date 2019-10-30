import { apiHttp } from "../axiosApi.js";
import {
  mobileUserPath,
  userPath,
  appPersonPath,
  appPersonData
} from "../config/apiRoute.js";

export const createUserApi = body => apiHttp("POST", `${mobileUserPath}`, body);

export const createAppPersonApi = (userId, body) =>
  apiHttp("POST", `${appPersonPath}/${userId}`, body);

export const updateUserApi = (userId, body) =>
  apiHttp("PUT", `${mobileUserPath}/${userId}`, body);

export const changePassUserApi = (userId, password) =>
  apiHttp("PUT", `${userPath}/password/${userId}`, { password });

export const getAppPersonApi = userName =>
  apiHttp("GET", `${appPersonData}/${userName}/A`);

export const loginApi = ( email, password ) => {
  return apiHttp("GET", `${userPath}/detail`, null, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Basic " + btoa(`${email}:${password}`)
    }
  });
};
