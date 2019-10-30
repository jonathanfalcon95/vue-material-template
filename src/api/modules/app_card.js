import { apiHttp } from "../axiosApi.js";
import { stringify } from "query-string";
import {
  appCardsData,
  appMovements,
  appCardsPin,
  appCardsUnblock,
  appCardsBlock
} from "../config/apiRoute.js";

export const getAppCardsData = affiliateId =>
  apiHttp("GET", `${appCardsData}/${affiliateId}`);

export const getMovements = query =>
  apiHttp("GET", `${appMovements}?${stringify(query)}`);

export const updatePinCard = (cardId, body) =>
  apiHttp("PUT", `${appCardsPin}/${cardId}`, body);

export const blockCard = (cardId, body = {}) =>
  apiHttp("PUT", `${appCardsBlock}/${cardId}`, body);

export const unblockCard = (cardId, body = {}) =>
  apiHttp("PUT", `${appCardsUnblock}/${cardId}`, body);
