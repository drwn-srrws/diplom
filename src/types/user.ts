export interface IUser {
  email: string;
  userName: string;
  password: string;
  avatar: string;
  availableThemes: IAvailableThemes[];

  _id: string;
}

export interface IAvailableThemes {
  themeName: string;
  themeUrl: string;
  themeTest: boolean;
  themeScore: number;
  nextPage: boolean,
}
availablethemes: [];
avatar: "";
email: "anxx@gmail.com";
password: "11123dasd";
userName: "11";
__v: 0;
_id: "646356b7e46e0b49cffb17fd";
