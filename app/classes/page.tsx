"use client";

import { NextPage } from "next";
import { Select } from "@/components/select/select";
import { useQuery } from "@tanstack/react-query";
import { fetchClasses } from "@/services/classes-service";
import { useState } from "react";
import { ClassesInfo } from "@/components/classes-info";

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
