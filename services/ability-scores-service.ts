import { IAbilityScore } from "@/models/ability-scores";
import { axiosApiDnd } from "./config/axios-dnd-service";

const url = "ability-scores";

export const fetchAbilityScores = async (): Promise<IAbilityScore[]> => {
  const response = await axiosApiDnd.get(url);
  const abilityScores = response.data.results;
  return abilityScores;
};
