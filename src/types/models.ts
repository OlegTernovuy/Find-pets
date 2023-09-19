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

type IPetsSell = string

export interface IFilter {
  sell: IPetsSell;
}

export interface IForm {
  email: string;
  password: string;
}

export interface IFormProps {
  buttonText: string;
  haveAccount: string;
  haveAccountText: string;
  haveAccountLink: string;
  EmailAndPasswordAuth: (data: IForm) => {};
}