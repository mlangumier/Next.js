import { useEffect, useState } from "react";
import { IRace } from "@/models/races";
import { getRace } from "@/services/races-service";

interface IProps {
  raceName: string;
}
export const RaceInfo: React.FC<IProps> = ({ raceName }) => {
  const [race, setRace] = useState<IRace | null>(null);
  const [errorObj, setErrorObj] = useState<any | null>(null);

  useEffect(() => {
    if (!raceName) {
      return;
    }

    setRace(null);

    const fetchRace = async () => {
      try {
        const res = await getRace(raceName);
        setRace(res);
      } catch (error: any) {
        console.log("TEST:", error);
        setErrorObj({ message: error });
      }
    };
    fetchRace();
  }, [raceName]);

  if (errorObj) {
    return <p className="text-red-500">An error occured</p>;
  }

  if (!raceName) {
    return <p>Search a race...</p>;
  } else if (!race) {
    return <p>Component: Template race w/ fallback values ()</p>;
  } else {
    return <RaceDescriptions race={race} />;
  }
};

const RaceDescriptions: React.FC<{ race: IRace }> = ({ race }) => (
  <div>
    <p>Race: {race.name}</p>
    <p>{race.size}</p>
    <p>{race.speed}</p>
    <p>{race.language_desc}</p>
    <p>{race.age}</p>
    <p>{race.alignment}</p>
  </div>
);
