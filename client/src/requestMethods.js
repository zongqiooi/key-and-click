import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NTBmMmQyYzU5NTE3ZDAyOWQxMTczZiIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2ODMyMDc4NzcsImV4cCI6MTY4MzQ2NzA3N30.5J1T2loVl9gEKwZ5CPbwHMp5ScgbE2knaLIGJAAvyE8";

export const publicRequest = axios.create({ baseURL: BASE_URL });

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
