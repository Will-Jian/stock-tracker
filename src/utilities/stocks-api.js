import sendRequest from "./send-request";
const BASE_URL = '/api/stocks';

export async function getStocks(data) {
  return sendRequest(`${BASE_URL}/getStocks`, "POST",  {data} );
}


export async function getTickerInfo(data) {
  return sendRequest(`${BASE_URL}/getTickerInfo`, "POST",  {data} );
}

export async function addFavorite(stock) {
  return sendRequest(`${BASE_URL}/addFavorite`, "POST",  stock );
}