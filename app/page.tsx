"use client";

import { useEffect, useState } from "react";

type Internship = {
  id: number;
  company: string;
  role: string;
  status: string;
  date: string;
};

export default function Home() {
  const [internships, setInternships] = useState<Internship[]>([]);
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [status, setStatus] = useState("Applied");
  const [date, setDate] = useState("");

  const addInternship = () => {
  const newInternship: Internship = {
    id: Date.now(),
    company,
    role,
    status,
    date,
  };

  setInternships([...internships, newInternship]);

  setCompany("");
  setRole("");
  setStatus("Applied");
  setDate("");
};
  useEffect(() => {
    fetch("https://internship-tracker-jkec.onrender.com/api/internships")
      .then((response) => response.json())
      .then((data) => setInternships(data));
  }, []);

  return (
    <main>
      <h1>Internship Tracker</h1>
      <h2>Add Internship</h2>

<input
  type="text"
  placeholder="Company"
  value={company}
  onChange={(e) => setCompany(e.target.value)}
/>

<input
  type="text"
  placeholder="Role"
  value={role}
  onChange={(e) => setRole(e.target.value)}
/>
<button type="button" onClick={addInternship}>
  Add Internship
</button>
<select value={status} onChange={(e) => setStatus(e.target.value)}>
  <option value="Applied">Applied</option>
  <option value="Interview">Interview</option>
  <option value="Rejected">Rejected</option>
  <option value="Selected">Selected</option>
</select>

<input
  type="date"
  value={date}
  onChange={(e) => setDate(e.target.value)}
/>

      <h2>My Applications</h2>

      {internships.map((internship) => (
        <div key={internship.id}>
          <h3>{internship.company}</h3>
          <p>{internship.role}</p>
          <p>Status: {internship.status}</p>
          <p>Applied: {internship.date}</p>
        </div>
      ))}
    </main>
  );
}