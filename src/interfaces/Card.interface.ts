export interface ICardResponse {
  id: string;
  attributes: {
    name: string;
    real_estate_ids: number[];
  };
}

export interface ICard {
  images: string[];
  title: string;
}
