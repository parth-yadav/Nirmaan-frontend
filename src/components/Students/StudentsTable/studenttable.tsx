import { useEffect, useState } from "react";
import { TeamMembers, columns } from "./studentcolumns";
import DataTable from "../../Table/data-ttable";

function getData(): Promise<TeamMembers[]> {
  return Promise.resolve([
    {
      id: "456def",
      name: "Prajjwal ",
      status: "pending",
    },
    {
      id: "789ghi",
      name: "Parth Yadav",
      status: "pending",
    },
    {
      id: "101jkl",
      name: "Vaibhav",
      status: "success",
    },
    {
      id: "112mno",
      name: "Bhupendra Jogi",
      status: "failed",
    },
    {
      id: "131pqr",
      name: "Prashant Kumar",
      status: "pending",
    },
  ]);
  return fetch("http://localhost:5000/api/tests").then((response) =>
    response.json()
  );
}

export default function TeamMembersTable() {
  const [data, setData] = useState<TeamMembers[]>([]);
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
      <DataTable columns={columns} searchcolumn="name" data={data} />
    </div>
  );
}
