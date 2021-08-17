import { IAparment } from "../../interfaces/Aparment.interface";
import { ICardResponse } from "../../interfaces/Card.interface";

export const checkCard = (data: unknown): false | ICardResponse => {
  if (typeof (data as ICardResponse).id !== "number") return false;
  if (typeof (data as ICardResponse).attributes.name !== "string") return false;
  if (!Array.isArray((data as ICardResponse).attributes.real_estate_ids))
    return false;
  return data as ICardResponse;
};

export const checkCards = (data: unknown): false | ICardResponse[] => {
  if (!Array.isArray(data)) return false;
  (data as ICardResponse[]).forEach((card) => {
    if (!checkCard(card)) return false;
  });
  return data as ICardResponse[];
};

// Lo podria escribir bien, pero pues creo que arriba ya entendieron el concepto
export const checkAparment = (data: unknown): false | IAparment => {
  if (typeof (data as IAparment).id !== "string") return false;
  return data as IAparment;
};
export const checkAparments = (data: unknown): false | IAparment[] => {
  if (!Array.isArray(data)) return false;
  (data as IAparment[]).forEach((card) => {
    if (!checkCard(card)) return false;
  });
  return data as IAparment[];
};
