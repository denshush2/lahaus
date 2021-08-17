import dotenv from "dotenv";

dotenv.config();

export const BASE_API_URL =
  process.env.BASE_API_URL ||
  (() => {
    console.log("BASE_API_URL Env not found, using default");
    return "http://localhost:4000";
  })();
