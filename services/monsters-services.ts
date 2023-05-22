import { IMonster } from "@/models/monsters";
import { axiosApiDnd } from "./config/axios-dnd-service";

const url = "monsters";

export const fetchMonsters = async (): Promise<IMonster[]> => {
  const response = await axiosApiDnd.get(url);
  const monster = response.data.results;
  return monster;
};

export const fetchMonster = async (monsterName: string): Promise<IMonster> => {
  const response = await axiosApiDnd.get(`${url}/${monsterName}`);
  const monster = response.data;
  return monster;
};

export const createMonster = async (monsterName: string) => {
  return { index: "pigeon", name: monsterName, url: "/pigeon" };
};
