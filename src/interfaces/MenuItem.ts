export interface MenuItem {
  id: number;
  attributes: Attributes;
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
