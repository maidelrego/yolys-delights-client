export interface MenuItem {
  id: number;
  attributes: Attributes;
}

export interface Ratings {
  data: Data[];
}
export interface Attributes {
  title: string;
  desc?: null;
  price: number;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  rating: number;
  quantity: number;
  ratings: Ratings;
  img: Img;
}
export interface Img {
  data: Data;
}
export interface Data {
  id: number;
  attributes: Attributes1;
}
export interface Attributes1 {
  url: string;
}
