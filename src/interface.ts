export interface Icategory {
  name: string;
  id: number;
  isActive: boolean;
}

export interface IstateApp {
  level: number;
  random: number;
  score: number;
}
export interface Ibird {
  id: number;
  name: string;
  species: string;
  description: string;
  image: string;
  audio: string;
}

export interface IstateAnswers {
  isStart: boolean;
  idActive: number;
}

export interface Ioption {
  onClickOption: boolean;
}
