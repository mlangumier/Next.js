import { NextPage } from "next";
import { Layout } from "@/components/layout";
import { IMonster } from "@/models/monsters";
import {
  createMonster,
  fetchMonster,
  fetchMonsters,
} from "@/services/monsters-services";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import Image from "next/image";

let monstersMock = [
  {
    index: "adult-black-dragon",
    name: "Adult Black Dragon",
    url: "/adult-black-dragon",
  },
  { index: "drow", name: "Drow", url: "/drow" },
  { index: "owlbear", name: "Owlbear", url: "/owlbear" },
];

const Monsters: NextPage = () => {
  const queryClient = useQueryClient();
  const [monster, setmonster] = useState<Partial<IMonster> | null>(null);

  // *Fetch Monsters list
  const { data, isLoading, error } = useQuery({
    queryKey: ["monsters"],
    // queryFn: fetchMonsters, // Real fetch
    queryFn: ({ queryKey }) => {
      // console.log("Obj:", queryKey); // Useful for bug-fixing
      return monstersMock;
    },
    placeholderData: [{ index: "goblin", name: "Goblin", url: "/goblin" }],
    // staleTime: 1000 * 60 * 2, // cached for 2mins
    refetchInterval: 1000 * 5, // refetch every 5s
  });

  // *Create new monster
  const createMonsterMutation = useMutation({
    // mutationFn: (monsterName: string) => createMonster(monsterName), // Real post
    mutationFn: async (param: string) => {
      monstersMock.push({
        index: "pigeon",
        name: param,
        url: "/pigeon",
      });
    },
    // Is called at the start of the mutation:
    onMutate: async (param) => {
      // Cancels outgoing refetches
      await queryClient.cancelQueries({ queryKey: ["monsters"] });
    },
    // *onSuccess, onError, onSettled work the same way:
    onSuccess: (data, param, context) => {
      // data: is the returned data from the success
      // param: is the param passed to the function (ex: formData)
      // context: is the returned value from 'onMutate'

      // * Here, we manually cache the new querykey with the new data => won't have to fetch the component/page when we display it
      // queryClient.setQueryData(["monsters", monster?.index], data);

      // * invalidate data (make stale (expiré)) & refetch
      queryClient.invalidateQueries({ queryKey: ["monsters"], exact: true });
      // {exact: true}: only refreshed the main 'monsters' query, not those with IDs or params (the main list, not the details page)
    },
  });

  // *Get monster details (usually in child component, but here demonstrates 'enable' key)
  const monsterQuery = useQuery({
    queryKey: ["monsters", monster?.index],
    enabled: monster !== null,
    queryFn: () => fetchMonster(monster?.index as string),
  });

  return (
    <Layout>
      <h1 className="text-2xl">Items</h1>

      <button
        type="button"
        disabled={isLoading}
        onClick={() => createMonsterMutation.mutate("Blue-Pigeon")}
      >
        Add Pigeon
      </button>

      <div className="flex flex-col">
        {isLoading ? <p>Loading monsters...</p> : null}
        {error instanceof Error ? <p>Error: {error.message}</p> : null}
        {data
          ? data.map((monster: Partial<IMonster>) => (
              <p
                key={monster.index}
                className="py-2 px-4"
                onClick={() => setmonster(monster)}
              >
                {monster.name}
              </p>
            ))
          : null}
      </div>

      <MonsterInfo
        monster={monster as IMonster}
        isLoading={monsterQuery.isLoading}
        error={monsterQuery.error}
      />
    </Layout>
  );
};

const MonsterInfo: React.FC<{
  monster: IMonster;
  isLoading: boolean;
  error: unknown;
}> = ({ monster, isLoading, error }) => {
  return (
    <div className="py-4">
      <h1 className="text-xl py-2 text-center">Monster</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : error instanceof Error ? (
        <p>Monster derped in the woods... ({error.message})</p>
      ) : (
        <>
          <p className="text-xl">{monster.name}</p>
          <p>Size: {monster.size}</p>
          <p>Hit points: {monster.hit_points}</p>
          {monster.desc?.map((d: string) => (
            <p key={d}>{d}</p>
          ))}
          {/* <Image
          src={`${process.env.NEXT_PUBLIC_API_IMAGE}${data.image}`}
          alt={data.name}
          fill
        /> */}
        </>
      )}
    </div>
  );
};

export default Monsters;
