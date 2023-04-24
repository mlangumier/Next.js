import { NextPage } from "next";
import { Layout } from "@/components/layout";
import { Select } from "@/components/select/select";
import { useQuery } from "react-query";
import { fetchClasses } from "@/services/classes-service";
import { useState } from "react";
import { ClassesInfo } from "@/components/classes-info";

const Classes: NextPage = () => {
  const [selectedClass, setSelectedClass] = useState<string | null>(null);

  const {
    isLoading,
    data: classes,
    isSuccess,
    error,
    isError,
  } = useQuery(["classes"], fetchClasses, { staleTime: 60000 });

  return (
    <Layout>
      <h1 className="text-2xl">Classes</h1>

      {classes && (
        <Select
          list={classes as any}
          selected={selectedClass}
          onSelected={setSelectedClass}
        />
      )}

      {selectedClass && <ClassesInfo className={selectedClass} />}
    </Layout>
  );
};

export default Classes;
