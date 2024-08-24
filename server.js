import express from "express";
import cors from "cors";

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

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

// GET - Retrieve all exam schemas
app.get("/api/examschemas", (req, res) => {
  res.json(examschemas);
});

// POST - Create a new exam schema
app.post("/api/examschemas", (req, res) => {
  const { title, targetgroup, status } = req.body;

  // Validate the request body
  if (!title || !targetgroup || !status) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  const newExamSchema = {
    id: Date.now().toString(),
    title,
    targetgroup,
    status,
  };

  examschemas.push(newExamSchema);
  res.status(201).json(newExamSchema);
});

// PUT - Update an existing exam schema
app.put("/api/examschemas/:id", (req, res) => {
  const { id } = req.params;
  const { title, targetgroup, status } = req.body;

  const index = examschemas.findIndex((exam) => exam.id === id);

  if (index !== -1) {
    // Update the exam schema
    examschemas[index] = {
      ...examschemas[index],
      title: title ?? examschemas[index].title,
      targetgroup: targetgroup ?? examschemas[index].targetgroup,
      status: status ?? examschemas[index].status,
    };

    res.json(examschemas[index]);
  } else {
    res.status(404).json({ message: "Exam schema not found" });
  }
});

// DELETE - Remove an exam schema
app.delete("/api/examschemas/:id", (req, res) => {
  const { id } = req.params;
  const index = examschemas.findIndex((exam) => exam.id === id);

  if (index !== -1) {
    const [deletedExamSchema] = examschemas.splice(index, 1);
    res.json(deletedExamSchema);
  } else {
    res.status(404).json({ message: "Exam schema not found" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
