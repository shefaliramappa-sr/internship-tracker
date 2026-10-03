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

  useEffect(() => {
    fetch("https://internship-tracker-jkec.onrender.com/api/internships")
      .then((response) => response.json())
      .then((data) => setInternships(data));
  }, []);

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

  return (
    <main className="page">
      <div className="container">

        {/* Header */}
        <header className="header">
          <div>
            <p className="eyebrow">MY CAREER JOURNEY</p>

            <h1>Internship Tracker</h1>

            <p className="subtitle">
              Keep track of your internship applications in one place.
            </p>
          </div>

          <div className="header-icon">
            ✦
          </div>
        </header>

        {/* Add Internship */}
        <section className="form-card">
          <div className="section-heading">
            <div>
              <h2>Add Internship</h2>

              <p>
                Add a new internship application to your tracker.
              </p>
            </div>

            <span className="plus-icon">+</span>
          </div>

          <div className="form-grid">

            <div className="input-group">
              <label>Company</label>

              <input
                type="text"
                placeholder="e.g. Google"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              />
            </div>

            <div className="input-group">
              <label>Role</label>

              <input
                type="text"
                placeholder="e.g. Software Engineer Intern"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              />
            </div>

            <div className="input-group">
              <label>Status</label>

              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="Applied">Applied</option>
                <option value="Interview">Interview</option>
                <option value="Rejected">Rejected</option>
                <option value="Selected">Selected</option>
              </select>
            </div>

            <div className="input-group">
              <label>Application Date</label>

              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>

          </div>

          <button
            type="button"
            className="add-button"
            onClick={addInternship}
          >
            + Add Internship
          </button>
        </section>

        {/* Applications */}
        <section className="applications-section">

          <div className="applications-header">
            <div>
              <p className="eyebrow">YOUR APPLICATIONS</p>

              <h2>My Applications</h2>
            </div>

            <span className="application-count">
              {internships.length} applications
            </span>
          </div>

          <div className="cards-grid">

            {internships.map((internship) => (

              <div
                className="internship-card"
                key={internship.id}
              >

                <div className="card-top">

                  <div className="company-avatar">
                    {internship.company
                      ? internship.company.charAt(0).toUpperCase()
                      : "?"}
                  </div>

                  <span
                    className={`status status-${internship.status
                      .toLowerCase()
                      .replace(" ", "-")}`}
                  >
                    {internship.status}
                  </span>

                </div>

                <h3>
                  {internship.company || "Company"}
                </h3>

                <p className="role">
                  {internship.role || "Role not specified"}
                </p>

                <div className="card-date">
                  <span>Applied</span>

                  <strong>
                    {internship.date || "Not set"}
                  </strong>
                </div>

              </div>

            ))}

          </div>

        </section>

      </div>
    </main>
  );
}