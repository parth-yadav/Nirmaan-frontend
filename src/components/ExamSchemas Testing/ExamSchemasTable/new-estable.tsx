// import React, { useEffect, useState } from "react";
// import { ExamSchema, columns } from "./es-columns";
// import DataTable from "../../Table/new-table";
// import ApiModal from "../../Table/ApiModal";

// function getData(): Promise<ExamSchema[]> {
//   return fetch("http://localhost:5000/api/examschemas").then((response) =>
//     response.json()
//   );
// }

// async function fetchData(): Promise<ExamSchema[]> {
//     const response = await fetch('http://localhost:5000/api/examschemas');
//     const result = await response.json();
//     return result;
//   }

  

// export default function ExamSchemaTablex() {
//   const [data, setData] = useState<ExamSchema[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [selectedExam, setSelectedExam] = useState<ExamSchema | null>(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [actionType, setActionType] = useState<"" | "POST" | "PUT" | "DELETE">(
//     ""
//   );

//   useEffect(() => {
//     async function fetchData() {
//       const result = await getData();
//       setData(result);
//       setLoading(false);
//     }

//     fetchData();
//   }, []);

//   const refreshTable = async () => {
//     try {
//       const result = await fetchData();
//       setData(result);
//     } catch (error) {
//       console.error("Error refreshing data:", error);
//     }
//   };

//   const handleRowClick = (row: ExamSchema) => {
//     setSelectedExam(row);
//     setIsModalOpen(true);
//     setActionType("PUT");
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     setSelectedExam(null);
//     setActionType("");
//   };

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="py-10">
//       <DataTable
//         columns={columns}
//         searchcolumn="title"
//         data={data}
//         onRowClick={handleRowClick}
//       />
//       {selectedExam && (
//         <ApiModal
//           isOpen={isModalOpen}
//           onClose={closeModal}
//           actionType={actionType}
//           apiEndpoint={`http://localhost:5000/api/examschemas/${selectedExam.id}`}
//           rowData={selectedExam}
//           refreshTable={refreshTable}
//         />
//       )}
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import { ExamSchema, columns } from "./es-columns";
import DataTable from "../../Table/new-table";
import ApiModal from "../../Table/ApiModal";

const fetchData = async (): Promise<ExamSchema[]> => {
  const response = await fetch("http://localhost:5000/api/examschemas");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

export default function ExamSchemaTablex() {
  const [data, setData] = useState<ExamSchema[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedExam, setSelectedExam] = useState<ExamSchema | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [actionType, setActionType] = useState<"" | "POST" | "PUT" | "DELETE">("");

  useEffect(() => {
    const loadData = async () => {
      try {
        const result = await fetchData();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const refreshTable = async () => {
    try {
      const result = await fetchData();
      setData(result);
    } catch (error) {
      console.error("Error refreshing data:", error);
    }
  };

  const handleRowClick = (row: ExamSchema) => {
    setSelectedExam(row);
    setIsModalOpen(true);
    setActionType("PUT"); // You might want to customize this based on context
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedExam(null);
    setActionType("");
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="py-10">
      <DataTable
        columns={columns}
        searchcolumn="title"
        data={data}
        onRowClick={handleRowClick}
      />
      {selectedExam && (
        <ApiModal
          isOpen={isModalOpen}
          onClose={closeModal}
          actionType={actionType}
          apiEndpoint={`http://localhost:5000/api/examschemas/${selectedExam.id}`}
          rowData={selectedExam}
          refreshTable={refreshTable}
        />
      )}
    </div>
  );
}

