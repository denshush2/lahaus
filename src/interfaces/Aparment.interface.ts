export interface IAparment {
  id: string;
  attributes: {
    slug: string;
    name: string;
    description: string;
    code: string;
    city: string;
    country: string;
    neighborhood: string;
    min_area: number;
    min_price: number;
    max_price: number | null;
    is_new: boolean;
    stratum: number;
    matterport: null;
    gallery_urls: string[];
    administration_price: number;
    bathroom: number[];
    bedroom: number[];
    amenities: string[];
    parking_lots_units: number[];
    parking_lots: number[];
    year_built: number;
    reservation_fee: null;
    reservation_fee_measure_unit: null;
    builder: null;
    fiduciary: null;
    latitude: number;
    longitude: number;
    la_haus_state: string;
    is_prelaunch: boolean;
    la_haus_city: string;
    delivered_at: string;
    price_per_square_meter: number;
    minimum_price_guaranteed: null;
  };
}
