// Doc Axios:
// https://www.npmjs.com/package/react-axios

import axios from "axios";
import { IClass } from "@/models/classes";

const url = "/classes";

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
