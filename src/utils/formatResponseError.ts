import { IResponseError } from "../services/http/types";

export const formatResponseError = (
  funcName: string,
  error: unknown
): IResponseError => {
  if (error instanceof Error) {
    return {
      error: true,
      message: error.message,
    };
  }
  return {
    error: true,
    message: `${funcName}: unknown error`,
  };
};
