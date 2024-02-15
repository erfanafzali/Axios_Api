import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com";
export const api = axios.create({ baseURL: BASE_URL });

api.interceptors.request.use(
  (request) => {
    request.headers.Authorization = "token";
    console.log(`${request.method} request send to ${request.url} `);
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    console.log(response);
    return response.data;
  },
  (error) => {
    return Promise.response(error);
  }
);
