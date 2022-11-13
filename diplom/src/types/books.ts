
export interface IBooks {
  isbn13: number;
  subtitle: string;
  price: string;
  image: string;
  title: string
}

export interface IBooksDetails {
  title?: string;
  subtitle?: string;
  authors?: string;
  publisher?: string;
  desc?: string;
  image?: string;
  price?: string;
  year?: string


}