import { useEffect, useState } from "react";
import { TeamMembers, columns } from "./studentcolumns";
import DataTable from "../../Table/data-ttable";
import StudentModal from "./studentmodal"

function getData(): Promise<TeamMembers[]> {
  return Promise.resolve([
    {
      id: "456def",
      name: "Pandit Prajjawal",
      email: "panditprajjawal@gmail.com",
      phone: "+91 9123456789",
      gender: "Male",
      from: "State, Country",
      birthday: "16 April",
      targetGroups: ["NDA", "AFCAT", "CDS"],
      walletBalance: 2,
      examsPurchased: 5,
      lastLogin: "23 Dec 2023, 11:28 AM",
      status: "pending",
    },
    {
      id: "789ghi",
      name: "Example User",
      email: "example.user123@gmail.com",
      phone: "+91 9876543210",
      gender: "Female",
      from: "City, Country",
      birthday: "10 July",
      targetGroups: ["SSC", "Banking", "Railways"],
      walletBalance: 10,
      examsPurchased: 3,
      lastLogin: "24 Nov 2024, 10:15 AM",
      status: "pending",
    },
    {
      id: "101jkl",
      name: "Random Email",
      email: "random.email456@gmail.com",
      phone: "+91 8527419630",
      gender: "Male",
      from: "Town, State",
      birthday: "5 May",
      targetGroups: ["UPSC", "CAT"],
      walletBalance: 5,
      examsPurchased: 2,
      lastLogin: "20 Nov 2024, 09:30 AM",
      status: "success",
    },
    {
      id: "112mno",
      name: "Test User",
      email: "test.user789@gmail.com",
      phone: "+91 9638527410",
      gender: "Female",
      from: "Village, District",
      birthday: "1 January",
      targetGroups: ["GATE", "JEE"],
      walletBalance: 8,
      examsPurchased: 4,
      lastLogin: "22 Nov 2024, 08:45 PM",
      status: "failed",
    },
    {
      id: "131pqr",
      name: "Sample Email",
      email: "sample.email999@gmail.com",
      phone: "+91 7418529630",
      gender: "Male",
      from: "Metropolis, Country",
      birthday: "25 December",
      targetGroups: ["CLAT", "NEET"],
      walletBalance: 3,
      examsPurchased: 1,
      lastLogin: "23 Nov 2024, 07:20 AM",
      status: "pending",
    },
  ]);
  // return fetch("http://localhost:5000/api/tests").then((response) =>
  //   response.json()
  // );
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
        ModalComponent={StudentModal} // Pass the modal component
      />
    </div>
  );
}

