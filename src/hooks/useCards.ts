import { useState } from "react";
import { ICard, ICardResponse } from "../interfaces/Card.interface";
import * as HttpService from "../services/http";

export const useCards = () => {
  const [cards, setCards] = useState<ICard[]>([]);
  const getCards = async (): Promise<ICardResponse[]> => {
    try {
      const response = await HttpService.getAllCards();
      if (response.error === true) throw new Error(response.message);
      response.data.forEach(async (card) => {
        const getIAparamentImages = await HttpService.getAparments(
          card.attributes.real_estate_ids.map((id) => id.toString())
        );
        if (getIAparamentImages.error === true)
          throw new Error(getIAparamentImages.message);
        setCards((prevState) => [
          ...prevState,
          {
            title: card.attributes.name,
            images: getIAparamentImages.data
              .map((aparment) => [...aparment.attributes.gallery_urls])
              .flat(1),
          },
        ]);
      });

      return response.data;
    } catch (error) {
      return [];
    }
  };

  return {
    getCards,
    cards,
  };
};
