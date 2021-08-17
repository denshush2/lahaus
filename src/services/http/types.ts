import { IAparment } from "../../interfaces/Aparment.interface";
import { ICardResponse } from "../../interfaces/Card.interface";

export interface IResponseError {
  error: true;
  message: string;
}
interface IResponseSuccessList {
  cards: ICardResponse[];
  aparments: IAparment[];
  aparment: IAparment;
}
export interface IResponseSuccess<T extends keyof IResponseSuccessList> {
  error: false;
  data: IResponseSuccessList[T];
}
