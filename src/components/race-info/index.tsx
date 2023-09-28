import { EStatus } from "@/src/models/enums/fetch-status";
import { IRace } from "@/src/models/races";
import { fetchRace } from "@/src/services/races-service";
import { useEffect, useState } from "react";

interface IProps {
  raceName: string;
}
export const RaceInfo: React.FC<IProps> = ({ raceName }) => {
  const [state, setState] = useState<{
    status: EStatus;
    race?: IRace;
    error?: any;
  }>({
    status: EStatus.IDLE,
  });

  const { status, error, race } = state;

  useEffect(() => {
    if (!raceName) {
      return;
    }

    setState({ status: EStatus.PENDING });

    const getRace = async () => {
      try {
        const res = await fetchRace(raceName);
        setState({ status: EStatus.RESOLVED, race: res });
      } catch (error) {
        setState({ status: EStatus.REJECTED, error });
      }
    };
    getRace();
  }, [raceName]);

  if (status === "IDLE") {
    return <p>Begin your search</p>;
  } else if (status === EStatus.PENDING) {
    return <p>Searching for: {raceName}</p>;
  } else if (status === EStatus.REJECTED) {
    return <p className="text-red-500">{error.message}</p>;
  } else if (status === EStatus.RESOLVED && race) {
    return <RaceDescriptions race={race} />;
  }
  throw new Error("Couldn't render page, something went wrong");
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
