// Doc Axios:
// https://www.npmjs.com/package/react-axios

import { IClass } from "@/models/classes";
import axios from "axios";

const urlApi = process.env.NEXT_PUBLIC_API;
const url = `${urlApi}/classes`;

export const fetchClasses = async (): Promise<IClass[]> => {
  const response = await axios.get(url);
  const classes = response.data.results;
  return classes;
};

export const fetchClass = async (className: string) => {
  const response = await axios.get(`${url}/${className}`);
  const classRes = response.data;
  return classRes;
};
