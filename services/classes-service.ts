// Doc Axios:
// https://www.npmjs.com/package/react-axios

import { IClass } from "@/models/classes";
import { axiosApiDnd } from "./axios/axios-dnd";

const url = "classes";

export const fetchClasses = async (): Promise<IClass[]> => {
  const response = await axiosApiDnd.get(url);
  const classes = response.data.results;
  return classes;
};

export const fetchClass = async (className: string) => {
  const response = await axiosApiDnd.get(`${url}/${className}`);
  const classRes = response.data;
  return classRes;
};
