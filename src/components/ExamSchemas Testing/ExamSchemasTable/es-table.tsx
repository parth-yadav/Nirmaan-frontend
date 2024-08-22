import { useEffect, useState } from "react";
import { ExamSchema, columns } from "./es-columns";
import DataTable from "../../Table/data-ttable";

function getData(): Promise<ExamSchema[]> {
  
  return fetch('http://localhost:5000/api/examschemas')
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

