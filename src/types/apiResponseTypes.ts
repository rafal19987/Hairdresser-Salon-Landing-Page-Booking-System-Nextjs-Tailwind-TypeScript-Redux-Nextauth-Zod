import { type StaticImageData } from 'next/image';

export type TDataFromApiProps = {
  html_attributions: any[];
  result: {
    address_components: {
      long_name: string;
      short_name: string;
      types: string[];
    }[];
    adr_address: string;
    business_status: string;
    current_opening_hours: {
      open_now: boolean;
      periods: {
        close: {
          date: string;
          day: number;
          time: string;
        };
        open: {
          date: string;
          day: number;
          time: string;
        };
      }[];
      weekday_text: string[];
    };
    formatted_address: string;
    formatted_phone_number: string;
    geometry: {
      location: {
        lat: number;
        lng: number;
      };
      viewport: {
        northeast: {
          lat: number;
          lng: number;
        };
        southwest: {
          lat: number;
          lng: number;
        };
      };
    };
    icon: string;
    icon_background_color: string;
    icon_mask_base_uri: string;
    international_phone_number: string;
    name: string;
    opening_hours: {
      open_now: boolean;
      periods: {
        close: {
          day: number;
          time: string;
        };
        open: {
          day: number;
          time: string;
        };
      }[];
      weekday_text: string[];
    };
    photos: {
      height: number;
      html_attributions: string[];
      photo_reference: string;
      width: number;
    }[];
    place_id: string;
    plus_code: {
      compound_code: string;
      global_code: string;
    };
    rating: number;
    reference: string;
    reviews: TReviewsProps[];
    types: string[];
    url: string;
    user_ratings_total: number;
    utc_offset: number;
    vicinity: string;
    website: string;
    wheelchair_accessible_entrance: boolean;
  };
  status: string;
};

export type TReviewsProps = {
  author_name: string;
  author_url?: string;
  language?: string;
  original_language?: string;
  profile_photo_url: string | StaticImageData;
  rating: number;
  relative_time_description: string;
  text: string;
  time?: number;
  translated?: boolean;
};
