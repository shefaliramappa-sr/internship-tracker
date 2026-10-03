const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Internship Tracker backend is running!" });
});

app.get("/api/internships", (req, res) => {
  res.json([
    {
      id: 1,
      company: "Google",
      role: "Software Engineer Intern",
      status: "Applied",
      date: "2026-09-28",
    },
    {
      id: 2,
      company: "Microsoft",
      role: "Software Engineer Intern",
      status: "Interview",
      date: "2026-09-20",
    },
  ]);
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});