import sendRequest from "./send-request";
const BASE_URL = '/api/stocks';

export async function getStocks(data) {
  return sendRequest(BASE_URL, "POST", {data});
}
