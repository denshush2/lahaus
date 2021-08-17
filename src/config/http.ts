import axios, { AxiosInstance } from "axios";
import { BASE_API_URL } from "./variables";

let instance: AxiosInstance | null = null;

export const Http = (): AxiosInstance => {
  if (!instance) {
    instance = axios.create({
      baseURL: BASE_API_URL,
    });
  }
  return instance;
};
