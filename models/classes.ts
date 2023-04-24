export interface IClass {
  index: string;
  name: string;
  hit_die: number;
  subclasses: ISubclass[];
  proficiencies: IProficiency[];
  saving_throws: ISavingThrow[];
}

export interface ISubclass {
  name: string;
}

export interface IProficiency {
  name: string;
}

export interface ISavingThrow {
  name: string;
}
