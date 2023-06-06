export interface MenuItem {
  id: number;
  attributes: Attributes;
}

export interface Attributes {
  title: string;
  desc?: null;
  price: number;
  quantity: number;
  type?: null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  rating: number;
  img: Img;
  categories: Categories;
}
export interface Img {
  data: Data;
}
export interface Data {
  id: number;
  attributes: Attributes1;
}
export interface Attributes1 {
  name: string;
  alternativeText?: null;
  caption?: null;
  width: number;
  height: number;
  formats: Formats;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl?: null;
  provider: string;
  provider_metadata?: null;
  createdAt: string;
  updatedAt: string;
}
export interface Formats {
  large: LargeOrSmallOrMediumOrThumbnail;
  small: LargeOrSmallOrMediumOrThumbnail;
  medium: LargeOrSmallOrMediumOrThumbnail;
  thumbnail: LargeOrSmallOrMediumOrThumbnail;
}
export interface LargeOrSmallOrMediumOrThumbnail {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path?: null;
  size: number;
  width: number;
  height: number;
}
export interface Categories {
  data?: (DataEntity)[] | null;
}
export interface DataEntity {
  id: number;
  attributes: Attributes2;
}
export interface Attributes2 {
  title: string;
  desc?: null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

