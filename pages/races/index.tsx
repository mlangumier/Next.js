import { NextPage } from "next";
import { Layout } from "@/components/layout";
import { useState } from "react";
import { RaceInfo } from "@/components/race-info";
import { SearchForm } from "@/components/search-form/search-form";

const Races: NextPage = () => {
  const [raceName, setRaceName] = useState<string>("");

  const handleSubmit = (newRaceName: string) => {
    setRaceName(newRaceName);
  };

  return (
    <Layout>
      <h1 className="text-2xl">Races</h1>

      <SearchForm initialSearch={raceName} onSubmit={handleSubmit} />
      <RaceInfo raceName={raceName} />
    </Layout>
  );
};

export default Races;
