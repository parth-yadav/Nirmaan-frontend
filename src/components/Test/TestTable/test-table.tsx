import { useEffect, useState } from "react";
import { Test, columns } from "./test-columns";
import DataTable from "../../Table/data-ttable";

// function getData(): Promise<Test[]> {
//   return Promise.resolve([
//     {
//       id: "456def",
//       title: "React Fundamentals",
//       questioncount: 15,
//       duration: 45,
//       attempts: 3,
//       status: "pending",
//       total_questions: 90,
//       maximum_marks: 100,
//       attempts_remaining:2,
//       max_attempts:5,
//       sections: [
//         { title: "Section 1", questions: 10,maximum_marks:25 },
//         { title: "Section 2", questions: 15  ,maximum_marks:45},
//         { title: "Section 3", questions: 5 ,maximum_marks:55},
//         { title: "Section 4", questions: 10 ,maximum_marks:15},
//       ],
//       results: [
//         {previous_attempts:"Attempt 1",attempted_on:"12 Jan 2014",marks_obtained:80},
//         {previous_attempts:"Attempt 1",attempted_on:"12 Jan 2014",marks_obtained:80},
//         {previous_attempts:"Attempt 1",attempted_on:"12 Jan 2014",marks_obtained:80},
//       ]


//     },
//     {
//       id: "789ghi",
//       title: "Advanced CSS",
//       questioncount: 12,
//       duration: 40,
//       attempts: 2,
//       status: "pending",
//     },
//     {
//       id: "101jkl",
//       title: "Node.js Overview",
//       questioncount: 8,
//       duration: 25,
//       attempts: 4,
//       status: "success",
//     },
//     {
//       id: "112mno",
//       title: "Python for Beginners",
//       questioncount: 20,
//       duration: 50,
//       attempts: 6,
//       status: "failed",
//     },
//     {
//       id: "131pqr",
//       title: "SQL Queries",
//       questioncount: 10,
//       duration: 30,
//       attempts: 1,
//       status: "pending",
//     },
//   ]);
//   return fetch("http://localhost:5000/api/tests").then((response) =>
//     response.json()
//   );
// }

function getData(): Promise<Test[]> {
  return Promise.resolve([
    {
      id: "456def",
      title: "React Fundamentals",
      questioncount: 15,
      duration: 45,
      attempts: 3,
      status: "pending",
      total_questions: 90,
      maximum_marks: 100,
      attempts_remaining: 2,
      max_attempts: 5,
      sections: [
        { title: "Section 1", questions: 10, maximum_marks: 25 },
        { title: "Section 2", questions: 15, maximum_marks: 45 },
        { title: "Section 3", questions: 5, maximum_marks: 55 },
        { title: "Section 4", questions: 10, maximum_marks: 15 },
      ],
      results: [
        { previous_attempts: "Attempt 1", attempted_on: "12 Jan 2014", marks_obtained: 80 },
        { previous_attempts: "Attempt 2", attempted_on: "15 Jan 2014", marks_obtained: 85 },
      ],
    },
    {
      id: "789ghi",
      title: "Advanced CSS",
      questioncount: 12,
      duration: 40,
      attempts: 2,
      status: "pending",
      total_questions: 50,
      maximum_marks: 75,
      attempts_remaining: 3,
      max_attempts: 5,
      sections: [
        { title: "Intro to CSS", questions: 5, maximum_marks: 20 },
        { title: "Flexbox & Grid", questions: 7, maximum_marks: 30 },
      ],
      results: [
        { previous_attempts: "Attempt 1", attempted_on: "20 Feb 2015", marks_obtained: 65 },
      ],
    },
    {
      id: "101jkl",
      title: "Node.js Overview",
      questioncount: 8,
      duration: 25,
      attempts: 4,
      status: "success",
      total_questions: 40,
      maximum_marks: 60,
      attempts_remaining: 1,
      max_attempts: 4,
      sections: [
        { title: "Introduction", questions: 3, maximum_marks: 10 },
        { title: "Modules", questions: 5, maximum_marks: 20 },
      ],
      results: [
        { previous_attempts: "Attempt 1", attempted_on: "12 Mar 2016", marks_obtained: 45 },
        { previous_attempts: "Attempt 2", attempted_on: "18 Mar 2016", marks_obtained: 55 },
      ],
    },
    {
      id: "112mno",
      title: "Python for Beginners",
      questioncount: 20,
      duration: 50,
      attempts: 6,
      status: "failed",
      total_questions: 100,
      maximum_marks: 150,
      attempts_remaining: 0,
      max_attempts: 6,
      sections: [
        { title: "Basics", questions: 10, maximum_marks: 50 },
        { title: "Data Structures", questions: 10, maximum_marks: 60 },
      ],
      results: [
        { previous_attempts: "Attempt 1", attempted_on: "22 Apr 2017", marks_obtained: 30 },
        { previous_attempts: "Attempt 2", attempted_on: "25 Apr 2017", marks_obtained: 40 },
        { previous_attempts: "Attempt 3", attempted_on: "28 Apr 2017", marks_obtained: 45 },
      ],
    },
    {
      id: "131pqr",
      title: "SQL Queries",
      questioncount: 10,
      duration: 30,
      attempts: 1,
      status: "pending",
      total_questions: 50,
      maximum_marks: 80,
      attempts_remaining: 4,
      max_attempts: 5,
      sections: [
        { title: "Basics of SQL", questions: 5, maximum_marks: 40 },
        { title: "Joins and Subqueries", questions: 5, maximum_marks: 40 },
      ],
      results: [],
    },
  ]);
  //   return fetch("http://localhost:5000/api/tests").then((response) =>
//     response.json()
//   );

}


export default function TestTable() {
  const [data, setData] = useState<Test[]>([]);
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
