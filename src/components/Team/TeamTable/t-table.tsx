import { useEffect, useState } from "react";
import { TeamMembers, columns } from "./t-columns";
import DataTable from "../../Table/data-ttable";
import TeamModal from "./t-modal";

function getData(): Promise<TeamMembers[]> {
  return Promise.resolve([
    {
      id: "456def",
      name: "Prajjwal",
      status: "pending",
      email: "prajjwal.test@gmail.com",
      phone: "+91 9876543210",
      gender: "Male",
      from: "Village A, District A",
      birthday: "10 January",
    },
    {
      id: "789ghi",
      name: "Parth Yadav",
      status: "pending",
      email: "parth.yadav@gmail.com",
      phone: "+91 9638527410",
      gender: "Male",
      from: "City B, State B",
      birthday: "15 February",
    },
    {
      id: "101jkl",
      name: "Vaibhav",
      status: "success",
      email: "vaibhav.user@gmail.com",
      phone: "+91 8529637410",
      gender: "Male",
      from: "Village C, District C",
      birthday: "20 March",
    },
    {
      id: "112mno",
      name: "Bhupendra Jogi",
      status: "failed",
      email: "bhupendra.jogi@gmail.com",
      phone: "+91 7418529630",
      gender: "Male",
      from: "City D, State D",
      birthday: "25 April",
    },
    {
      id: "131pqr",
      name: "Prashant Kumar",
      status: "pending",
      email: "prashant.kumar@gmail.com",
      phone: "+91 7894561230",
      gender: "Male",
      from: "Town E, District E",
      birthday: "30 May",
    },
  ]);
  return fetch('http://localhost:5000/api/tests')
    .then(response => response.json());
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
      <DataTable
        columns={columns}
        searchcolumn="title"
        data={data}
        ModalComponent={TeamModal} // Pass the modal component
      />
    </div>
  );
}

