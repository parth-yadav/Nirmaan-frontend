import express from "express";
import cors from "cors";

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());


let payments = [
  {
    id: "728ed52f",
    amount: 100,
    status: "pending",
    email: "m@example.com",
    name: "Michael",
  },
  {
    id: "a3f8e1b9",
    amount: 150,
    status: "pending",
    email: "a@example.com",
    name: "Alice",
  },
  {
    id: "b7c4d6e3",
    amount: 200,
    status: "pending",
    email: "b@example.com",
    name: "Bob",
  },
  {
    id: "d5a9f2c7",
    amount: 250,
    status: "pending",
    email: "c@example.com",
    name: "Charlie",
  },
  {
    id: "e2c6b4a1",
    amount: 300,
    status: "pending",
    email: "d@example.com",
    name: "David",
  },
  {
    id: "f9b1d8e5",
    amount: 350,
    status: "pending",
    email: "e@example.com",
    name: "Emma",
  },
  {
    id: "a9bcd4ef",
    amount: 150,
    status: "success",
    email: "john.doe@example.com",
    name: "John",
  },
  {
    id: "c5d3f2b8",
    amount: 200,
    status: "failed",
    email: "jane.smith@example.com",
    name: "Jane",
  },
  {
    id: "e4a7c6d3",
    amount: 120,
    status: "pending",
    email: "alex.brown@example.com",
    name: "Alex",
  },
];



let tests = [
  {
    id: "456def",
    title: "React Fundamentals",
    questioncount: 15,
    duration: 45,
    attempts: 3,
    status: "pending",
  },
  {
    id: "789ghi",
    title: "Advanced CSS",
    questioncount: 12,
    duration: 40,
    attempts: 2,
    status: "pending",
  },
  {
    id: "101jkl",
    title: "Node.js Overview",
    questioncount: 8,
    duration: 25,
    attempts: 4,
    status: "success",
  },
  {
    id: "112mno",
    title: "Python for Beginners",
    questioncount: 20,
    duration: 50,
    attempts: 6,
    status: "failed",
  },
  {
    id: "131pqr",
    title: "SQL Queries",
    questioncount: 10,
    duration: 30,
    attempts: 1,
    status: "pending",
  },
];
let examschemas = [
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
];
let wallet = [
  { 
    id: "131pgr",
    title: "Some Generic Medium Title - 2",
    amount: 2000,
    type: "Credit",
    timestamp: "10:00PM, 24 Mar",
    status: "pending",
    statusIcon:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/174a3009282e3a9f6b5606a3ce99ae7bc29805dddd0c10837ada9398c4fe7500?apiKey=8a82faa9db93454483a68c973b38c7b0&",
  },
  { 
    id: "13asqr",
    title: "Small Title - 1",
    amount: 500,
    type: "Expenditure",
    timestamp: "04:05AM, 2 Feb",
    status: "pending",
    statusIcon:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/bb05e8fb80ee028da22b22457af14d7739f89c1ba41f6317b131095f1449fd31?apiKey=8a82faa9db93454483a68c973b38c7b0&",
  },
  { 
    id: "1awgqr",
    title: "Some Generic Long Title which has extra words - 2",
    amount: 1000,
    type: "Debit",
    timestamp: "12:44PM, 9 Jan",
    status: "success",
    statusIcon:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/dc3a4dc5af2a849a3436479ad4ce94c5887b77104deb52713416bf13778a1385?apiKey=8a82faa9db93454483a68c973b38c7b0&",
  },
  { 
    id: "13r7hr",
    title: "Some Generic Medium Title - 2",
    amount: 500,
    type: "Credit",
    timestamp: "08:20PM, 25 Dec",
    status: "failed",
    statusIcon:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/ab2d99e3c96dda62b15a65d530450f015185f0837c30ad4737834735670b1bee?apiKey=8a82faa9db93454483a68c973b38c7b0&",
  },
  { 
    id: "1acbyr",
    title: "Some Generic Medium Title - 2",
    amount: 1000,
    type: "Credit",
    timestamp: "06:11PM, 16 Dec",
    status: "pending",
    statusIcon:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/4ea9c5395539cdd975bc9aa8147806c99d2fff4741e0c3b569417afef434450f?apiKey=8a82faa9db93454483a68c973b38c7b0&",
  },
];

app.get("/api/payments", (req, res) => {
  res.json(payments);
});
app.get("/api/tests", (req, res) => {
  res.json(tests);
});
app.get("/api/examschemas", (req, res) => {
  res.json(examschemas);
});
app.get("/api/wallet", (req, res) => {
  res.json(wallet);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
