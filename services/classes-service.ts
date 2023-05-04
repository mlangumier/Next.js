// Doc Axios:
// https://www.npmjs.com/package/react-axios

import { IClass } from "@/models/classes";
import { axiosDnd } from "./axios-service";

const url = "classes";

export const fetchClasses = async (): Promise<IClass[]> => {
  const response = await axiosDnd.get(url);
  const classes = response.data.results;
  return classes;
};

export const fetchClass = async (className: string) => {
  const response = await axiosDnd.get(`${url}/${className}`);
  const classRes = response.data;
  return classRes;
};
