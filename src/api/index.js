import http from "./api";

const queryNewsLatest = () => {
  return http.get('/api/news_latest');
}


export const api = {
  queryNewsLatest,
}