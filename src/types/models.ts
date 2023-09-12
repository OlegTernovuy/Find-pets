export interface IPets {
  id: number;
  sell: string;
  liked: boolean;
  photo: string;
  Breed: string;
  Place: string;
  Age: string;
  Price: string;
  title: string;
}

export type IPetsSell = string

export interface IFilter {
  sell: IPetsSell;
}