import axios from "axios";

const BASE_URL = "https://server-syncphonic.herokuapp.com/api/";
const TOKEN =
  JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
    .currentUser === null
    ? ""
    : JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
        .currentUser.token;

console.log(`requestMethods Token: ${TOKEN}`);
// console.log(
//   JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
// );

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${TOKEN}`,
  },
});

export const bookingRequest = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${TOKEN}`,
    "Content-Type": "application/x-www-form-urlencoded",
  },
});
