import axios from "axios";

const baseURL = "https://server-syncphonic.herokuapp.com/api";

export const registerAPI = axios.create({
  baseURL: baseURL,
  headers: {
    Accept: "application/json",
  },
});

export const loginAPI = axios.create({
  baseURL: baseURL,
  headers: {
    Accept: "application/json",
  },
});

export const allStudioAPI = axios.create({
  baseURL: baseURL,
  headers: {
    Accept: "application/json",
  },
});
