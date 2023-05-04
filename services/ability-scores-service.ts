import { IAbilityScore } from "@/models/ability-scores";
import { axiosDnd } from "./axios-service";

const url = "ability-scores";

export const fetchAbilityScores = async (): Promise<IAbilityScore[]> => {
  const response = await axiosDnd.get(url);
  const abilityScores = response.data.results;
  return abilityScores;
};
