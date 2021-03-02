import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080",
});

export const professionApi = () => api.get("profession");
export const formationApi = () => api.get("formation");
export const langueApi = () => api.get("langue");
export const informatiqueApi = () => api.get("informatique");
