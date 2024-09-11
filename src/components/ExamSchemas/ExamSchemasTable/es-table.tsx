import { useEffect, useState } from "react";
import { ExamSchema, columns } from "./es-columns";
import DataTable from "../../Table/data-ttable";

function getData(): Promise<ExamSchema[]> {
  return Promise.resolve([
    {
      id: "456def",
      title: "React Fundamentals",
      targetgroup: "AFCAT",
      status: "pending",
    },
    {
      id: "789ghi",
      title: "Advanced CSS",
      targetgroup: "CDS",
      status: "pending",
    },
    {
      id: "101jkl",
      title: "Node.js Overview",
      targetgroup: "NDA",
      status: "success",
    },
    {
      id: "112mno",
      title: "Python for Beginners",
      targetgroup: "All Groups",
      status: "failed",
    },
    {
      id: "131pqr",
      title: "SQL Queries",
      targetgroup: "CDS",
      status: "pending",
    },
  ])
  return fetch('http://localhost:5000/api/tests')
    .then(response => response.json());
}

export default function ExamSchemaTable() {
  const [data, setData] = useState<ExamSchema[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const result = await getData();
      setData(result);
      setLoading(false);
    }

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className=" py-10">
      <DataTable columns={columns} searchcolumn="title" data={data} />
    </div>
  );
}
