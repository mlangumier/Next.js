import axios from "axios";
import { IAbilityScore } from "@/models/ability-scores";

const url = "/ability-scores";

export const fetchAbilityScores = async (): Promise<IAbilityScore[]> => {
  const response = await axios.get(url);
  const abilityScores = response.data.results;
  return abilityScores;
};
