import { IAbilityScore } from "@/models/ability-scores";
import { axiosApiDnd } from "./axios/axios-service";

const url = "ability-scores";

export const fetchAbilityScores = async (): Promise<IAbilityScore[]> => {
  const response = await axiosApiDnd.get(url);
  const abilityScores = response.data.results;
  return abilityScores;
};
