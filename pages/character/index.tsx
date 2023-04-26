import { Layout } from "@/components/layout";
import { LevelManager } from "@/components/level-manager";
import { IAbilityScore } from "@/models/ability-scores";
import { fetchAbilityScores } from "@/services/ability-scores-service";
import { NextPage } from "next";
import { useState } from "react";
import { useQuery } from "react-query";

const Character: NextPage = () => {
  const { data } = useQuery(["ability-scores"], fetchAbilityScores, {
    staleTime: 60000,
  });
  const [selectedScore, setSelectedScore] = useState<IAbilityScore | null>(
    null
  );

  return (
    <Layout>
      <h1 className="text-2xl">Character</h1>
      <LevelManager />

      <div className="flex justify-center gap-2">
        {data ? (
          data.map((abilityScore: IAbilityScore) => (
            <button
              type="button"
              key={abilityScore.index}
              className="border border-slate-500 rounded-lg py-1 px-2 hover:bg-green-600 hover:text-slate-100"
              onClick={() => setSelectedScore(abilityScore)}
            >
              {abilityScore.name}
            </button>
          ))
        ) : (
          <p>Loading ability scores...</p>
        )}
      </div>

      {/* Get ability score */}
    </Layout>
  );
};

export default Character;
