import { Http } from "../../config/http";
import { formatResponseError } from "../../utils/formatResponseError";
import { APARMENT_URL, CARD_URL } from "./constants";
import { checkAparments, checkCards } from "./guards";
import { IResponseError, IResponseSuccess } from "./types";

export const getAllCards = async (): Promise<
  IResponseSuccess<"cards"> | IResponseError
> => {
  try {
    const httpResponse = await Http().get(CARD_URL);
    if (httpResponse.status !== 200) throw new Error(httpResponse.statusText);
    const response = checkCards(httpResponse.data);
    if (response === false) throw new Error("invalid data");
    return {
      error: false,
      data: response,
    };
  } catch (error) {
    return formatResponseError("getAllCards", error);
  }
};

export const getAparments = async (
  ids?: string[]
): Promise<IResponseSuccess<"aparments"> | IResponseError> => {
  try {
    const fetchIdsQuery = (): string => {
      if (ids) {
        return "?" + ids.map((id) => `id=${id}`).join("&");
      }
      return "";
    };
    console.log("fetchIdsQuery", fetchIdsQuery());
    const httpResponse = await Http().get(APARMENT_URL(fetchIdsQuery()));
    if (httpResponse.status !== 200) throw new Error(httpResponse.statusText);
    const response = checkAparments(httpResponse.data);
    if (response === false) throw new Error("invalid data");
    return {
      error: false,
      data: response,
    };
  } catch (error) {
    return formatResponseError("getAparments", error);
  }
};
