import { useEffect, useState } from "react";
import { QuestionPool, columns } from "./qp-columns";
import DataTable from "../../Table/data-ttable";
import QuestionPoolModal from "./qp-modal";

function getData(): Promise<QuestionPool[]> {
  return Promise.resolve([
    {
      id: "456def",
      title: "React Fundamentals",
      tags: ["CDS", "AFCAT"],
      status: "pending",
      description: "Learn the basics of React.",
    },
    {
      id: "789ghi",
      title: "Advanced CSS",
      tags: ["CDS", "AFCAT"],
      status: "pending",
      description: "Master advanced CSS techniques.",
    },
    {
      id: "101jkl",
      title: "Node.js Overview",
      tags: ["NDA"],
      status: "success",
      description: "Overview of Node.js concepts.",
    },
    {
      id: "112mno",
      title: "Python for Beginners",
      tags: ["All Groups"],
      status: "failed",
      description: "Introduction to Python programming.",
    },
    {
      id: "131pqr",
      title: "SQL Queries",
      tags: ["CDS", "AFCAT"],
      status: "pending",
      description: "Learn to write SQL queries.",
    },
  ]);
  return fetch('http://localhost:5000/api/tests')
    .then(response => response.json());
}

export default function QuestionPoolTable() {
  const [data, setData] = useState<QuestionPool[]>([]);
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
    <div className="">
      <DataTable
        columns={columns}
        searchcolumn="title"
        data={data}
        ModalComponent={QuestionPoolModal}
      />
    </div>
  );
}

