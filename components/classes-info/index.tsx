import { IClass, IProficiency, ISubclass } from "@/models/classes";
import { fetchClass } from "@/services/classes-service";
import { useQuery } from "@tanstack/react-query";

interface IProps {
  className: string;
}

export const ClassesInfo: React.FC<IProps> = ({ className }) => {
  const { isLoading, data, error, isError } = useQuery(
    ["classes", className],
    () => fetchClass(className),
    { staleTime: 60000 }
  );

  if (isLoading) {
    return <p>Is loading...</p>;
  } else if (isError) {
    console.log("Error:", error);
    return <p>An error occured</p>;
  } else {
    return <ClassInfo data={data} />;
  }
};

interface InfoProps {
  data: IClass;
}

const ClassInfo: React.FC<InfoProps> = ({ data }) => (
  <div className="text-start py-4">
    <p>Class: {data.name}</p>
    <p>Hit die: {data.hit_die}</p>

    <div className="py-2">
      <p>Subclasses:</p>
      {data.subclasses.map((subclass: ISubclass) => (
        <p key={subclass.name}>{subclass.name}</p>
      ))}
    </div>

    <div className="py-2">
      <p>Proficiencies:</p>
      {data.proficiencies.map((proficiency: IProficiency) => (
        <p key={proficiency.name}>{proficiency.name}</p>
      ))}
    </div>
  </div>
);
