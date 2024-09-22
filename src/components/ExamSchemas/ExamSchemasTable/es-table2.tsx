import { useEffect, useState } from "react";
import { ExamSchema, columns } from "./es-columns";
import DataTable from "../../Table/data-ttable";
import ExamModal from "./exam-modal"; // Import your modal component
import NewExamSchema from "../NewExamSchema/NewExamSchema";
import TabsModal from "../TabsModal/TabsModal";
import NewExamSchemaCopy from "../NewExamSchema/NewExamSchema copy";

function getData(): Promise<ExamSchema[]> {
  return Promise.resolve([
    {
      id: "456def",
      title: "React Fundamentals",
      targetgroup: "AFCAT",
      status: "pending",
      examtype: "Multiple Choice",
      duration: "60",
      total_question: 100,
      total_max_marks: 400,
      sections: [
        {
          name: "organic chemistry",
          questions: 10,
          marking: "+4/-1",
          max_marks: 100
        },
        {
          name: "non organic chemistry",
          questions: 10,
          marking: "+4/-1",
          max_marks: 80
        },
        {
          name: "chemistry",
          questions: 10,
          marking: "+4/-1",
          max_marks: 90
        }
      ],
      statistics: [
        {
          stocks_sold: 90,
          income: 4500,
          outbond_days: 32
        }
      ]
    },
    {
      id: "789ghi",
      title: "Advanced CSS",
      targetgroup: "CDS",
      status: "pending",
      examtype: "True/False",
      duration: "45",
      total_question: 80,
      total_max_marks: 320,
      sections: [
        {
          name: "CSS Selectors",
          questions: 15,
          marking: "+3/-1",
          max_marks: 60
        },
        {
          name: "Flexbox & Grid",
          questions: 20,
          marking: "+3/-1",
          max_marks: 80
        },
        {
          name: "Animations",
          questions: 10,
          marking: "+3/-1",
          max_marks: 70
        }
      ],
      statistics: [
        {
          stocks_sold: 120,
          income: 5400,
          outbond_days: 40
        }
      ]
    },
    {
      id: "101jkl",
      title: "Node.js Overview",
      targetgroup: "NDA",
      status: "success",
      examtype: "Short Answer",
      duration: "90",
      total_question: 70,
      total_max_marks: 280,
      sections: [
        {
          name: "Event Loop",
          questions: 10,
          marking: "+5/-2",
          max_marks: 50
        },
        {
          name: "Modules",
          questions: 15,
          marking: "+5/-2",
          max_marks: 90
        },
        {
          name: "Streams",
          questions: 12,
          marking: "+5/-2",
          max_marks: 70
        }
      ],
      statistics: [
        {
          stocks_sold: 110,
          income: 6200,
          outbond_days: 28
        }
      ]
    },
    {
      id: "112mno",
      title: "Python for Beginners",
      targetgroup: "All Groups",
      status: "failed",
      examtype: "Multiple Choice",
      duration: "30",
      total_question: 60,
      total_max_marks: 240,
      sections: [
        {
          name: "Syntax",
          questions: 20,
          marking: "+4/-1",
          max_marks: 100
        },
        {
          name: "Data Types",
          questions: 15,
          marking: "+4/-1",
          max_marks: 80
        },
        {
          name: "Control Flow",
          questions: 10,
          marking: "+4/-1",
          max_marks: 60
        }
      ],
      statistics: [
        {
          stocks_sold: 70,
          income: 3500,
          outbond_days: 20
        }
      ]
    },
    {
      id: "131pqr",
      title: "SQL Queries",
      targetgroup: "CDS",
      status: "pending",
      examtype: "Fill in the Blank",
      duration: "50",
      total_question: 75,
      total_max_marks: 300,
      sections: [
        {
          name: "Joins",
          questions: 10,
          marking: "+4/-2",
          max_marks: 100
        },
        {
          name: "Subqueries",
          questions: 20,
          marking: "+4/-2",
          max_marks: 120
        },
        {
          name: "Indexes",
          questions: 15,
          marking: "+4/-2",
          max_marks: 80
        }
      ],
      statistics: [
        {
          stocks_sold: 95,
          income: 5000,
          outbond_days: 35
        }
      ]
    }
  ]
  );
  // Use your API fetch logic here
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
    <div className="py-10">
      <DataTable
        columns={columns}
        searchcolumn="title"
        data={data}
        ModalComponent={NewExamSchemaCopy} // Pass the modal component
      />
    </div>
  );
}
