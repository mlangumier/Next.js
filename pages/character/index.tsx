import { AbilityScores } from "@/components/ability-scores";
import { Layout } from "@/components/layout";
import { NextPage } from "next";

const Character: NextPage = () => {
  return (
    <Layout>
      <h1 className="text-2xl">Character</h1>
      <AbilityScores />
    </Layout>
  );
};

export default Character;
