import axios from "axios";
import { IAbilityScore } from "@/models/ability-scores";

const urlApi = process.env.NEXT_PUBLIC_API;
const url = `${urlApi}/ability-scores`;

export const fetchAbilityScores = async (): Promise<IAbilityScore[]> => {
  const response = await axios.get(url);
  const abilityScores = response.data.results;
  return abilityScores;
};
