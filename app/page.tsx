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

  useEffect(() => {
    fetch("https://internship-tracker-jkec.onrender.com/api/internships")
      .then((response) => response.json())
      .then((data) => setInternships(data));
  }, []);

  return (
    <main>
      <h1>Internship Tracker</h1>

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