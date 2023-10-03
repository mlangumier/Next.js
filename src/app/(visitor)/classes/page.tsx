"use client";

import { NextPage } from "next";
import { useState } from "react";

import { ClassesInfo } from "@/src/components/classes-info";
import { Select } from "@/src/components/form-components/select/select";
import { fetchClasses } from "@/src/services/classes/classes-service";
import { useQuery } from "@tanstack/react-query";

// TODO: move "use client" to a children view or component
const Classes: NextPage = () => {
  const [selectedClass, setSelectedClass] = useState<string | null>(null);

  const { data: classes } = useQuery(["classes"], fetchClasses, {
    staleTime: 60000,
  });

  return (
    <main>
      <h1 className="text-2xl">Classes</h1>

      {classes && (
        <Select
          list={classes}
          selected={selectedClass}
          onSelected={setSelectedClass}
        />
      )}

      {selectedClass && <ClassesInfo className={selectedClass} />}
    </main>
  );
};

export default Classes;
