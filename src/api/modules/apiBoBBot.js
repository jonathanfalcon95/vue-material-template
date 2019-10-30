import { apiHttp } from "../axiosApi.js";
import { pairPath } from "../config/apiRoute.js";

export const getPairsService = () => {
  return apiHttp("GET", `${pairPath}`);
};

export const cancelPositionService = pair => {
  return apiHttp("POST", `${pairPath}/${pair}/command`, {
    name: "CLOSE_POSITION"
  });
};

export const cancelAllPositionsService = () => {
  return apiHttp("POST", `${pairPath}/command`, { name: "CLOSE_POSITION" });
};

export const stopPairService = pair => {
  return apiHttp("POST", `${pairPath}/${pair}/command`, {
    name: "STOP"
  });
};

export const startPairService = pair => {
  return apiHttp("POST", `${pairPath}/${pair}/command`, {
    name: "START"
  });
};
